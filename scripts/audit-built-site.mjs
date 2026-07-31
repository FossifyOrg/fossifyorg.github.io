import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";
import { parse } from "ultrahtml";

const root = process.cwd();
const dist = join(root, "dist");
const siteUrl = new URL("https://www.fossify.org");
const errors = [];

const walkFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(path) : [path];
  });

const walkNodes = (node, visit) => {
  visit(node);
  for (const child of node.children ?? []) walkNodes(child, visit);
};

const textContent = (node) => {
  if (node.type === 2) return node.value;
  return (node.children ?? []).map(textContent).join("");
};

const routeForFile = (file) => {
  const path = relative(dist, file).split(sep).join("/");
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -10)}`;
  return `/${path}`;
};

const targetForPath = (pathname) => {
  const clean = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!clean) return join(dist, "index.html");
  if (pathname.endsWith("/")) return join(dist, clean, "index.html");
  if (extname(clean)) return join(dist, clean);
  return join(dist, clean, "index.html");
};

if (!existsSync(dist)) {
  console.error("dist/ is missing. Run npm run build first.");
  process.exit(1);
}

const allFiles = walkFiles(dist);
const primaryHtmlFiles = allFiles.filter(
  (file) =>
    file.endsWith(".html") &&
    !/^policy\/(?!index\.html)[^/]+\.html$/.test(
      relative(dist, file).split(sep).join("/"),
    ),
);
const documents = new Map();
const idsByPath = new Map();
const canonicalPaths = new Set();
const titleRoutes = new Map();
let checkedLinks = 0;
let checkedImages = 0;

for (const file of primaryHtmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = routeForFile(file);
  const document = parse(html);
  const nodes = [];
  walkNodes(document, (node) => {
    if (node.type === 1) nodes.push(node);
  });
  documents.set(route, { file, html, nodes });

  const titles = nodes.filter((node) => node.name === "title");
  const h1s = nodes.filter((node) => node.name === "h1");
  const mains = nodes.filter((node) => node.name === "main");
  if (titles.length !== 1)
    errors.push(`${route}: expected one title, found ${titles.length}`);
  if (h1s.length !== 1)
    errors.push(`${route}: expected one h1, found ${h1s.length}`);
  if (mains.length !== 1)
    errors.push(`${route}: expected one main, found ${mains.length}`);

  const title = titles[0] ? textContent(titles[0]).trim() : "";
  if (!title) errors.push(`${route}: title is empty`);
  if (titleRoutes.has(title) && route !== "/404.html") {
    errors.push(
      `${route}: duplicate title also used by ${titleRoutes.get(title)}`,
    );
  } else {
    titleRoutes.set(title, route);
  }

  const idValues = nodes
    .map((node) => node.attributes?.id)
    .filter((value) => typeof value === "string");
  const ids = new Set(idValues);
  for (const id of new Set(
    idValues.filter((value, index) => idValues.indexOf(value) !== index),
  )) {
    errors.push(`${route}: duplicate id ${id}`);
  }
  idsByPath.set(new URL(route, siteUrl).pathname, ids);

  const robots = nodes.find(
    (node) => node.name === "meta" && node.attributes?.name === "robots",
  );
  const canonical = nodes.find(
    (node) => node.name === "link" && node.attributes?.rel === "canonical",
  );
  if (!canonical?.attributes?.href) {
    errors.push(`${route}: canonical link is missing`);
  } else if (
    !String(robots?.attributes?.content ?? "").includes("noindex") &&
    route !== "/404.html"
  ) {
    canonicalPaths.add(new URL(canonical.attributes.href, siteUrl).pathname);
  }

  for (const script of nodes.filter((node) => node.name === "script")) {
    if (
      script.attributes?.src ||
      script.attributes?.type !== "application/ld+json"
    ) {
      errors.push(`${route}: executable script found`);
    }
  }
}

const checkInternalTarget = (value, route, kind) => {
  if (!value || /^(mailto:|tel:|data:)/.test(value)) return;
  const url = new URL(value, new URL(route, siteUrl));
  if (url.origin !== siteUrl.origin) return;
  const target = targetForPath(url.pathname);
  if (!existsSync(target)) {
    errors.push(`${route}: missing ${kind} target ${url.pathname}`);
    return;
  }

  if (url.hash && kind === "link") {
    const id = decodeURIComponent(url.hash.slice(1));
    let ids = idsByPath.get(url.pathname);
    if (!ids && target.endsWith(".html")) {
      const targetDocument = parse(readFileSync(target, "utf8"));
      ids = new Set();
      walkNodes(targetDocument, (node) => {
        if (node.type === 1 && typeof node.attributes?.id === "string")
          ids.add(node.attributes.id);
      });
      idsByPath.set(url.pathname, ids);
    }
    if (!ids?.has(id))
      errors.push(`${route}: missing fragment ${url.pathname}#${id}`);
  }
};

for (const [route, { nodes }] of documents) {
  for (const node of nodes) {
    if (node.name === "a" && typeof node.attributes?.href === "string") {
      checkedLinks += 1;
      checkInternalTarget(node.attributes.href, route, "link");
    }
    if (node.name === "img" && typeof node.attributes?.src === "string") {
      checkedImages += 1;
      if (!Object.hasOwn(node.attributes, "alt")) {
        errors.push(`${route}: image is missing an alt attribute`);
      }
      checkInternalTarget(node.attributes.src, route, "image");
    }
    if (
      node.name === "link" &&
      ["icon", "apple-touch-icon", "manifest"].includes(node.attributes?.rel) &&
      typeof node.attributes?.href === "string"
    ) {
      checkInternalTarget(node.attributes.href, route, "asset");
    }
  }
}

const scriptFiles = allFiles.filter((file) => file.endsWith(".js"));
if (scriptFiles.length > 0) {
  errors.push(
    `generated JavaScript found: ${scriptFiles.map((file) => relative(dist, file)).join(", ")}`,
  );
}

const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const sitemapPaths = new Set(
  [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname,
  ),
);
for (const path of canonicalPaths) {
  if (!sitemapPaths.has(path))
    errors.push(`sitemap is missing canonical route ${path}`);
}
for (const path of sitemapPaths) {
  if (!canonicalPaths.has(path))
    errors.push(`sitemap contains non-indexable route ${path}`);
}

const appDirectories = readdirSync(join(dist, "apps"))
  .filter((name) => statSync(join(dist, "apps", name)).isDirectory())
  .sort();
const releaseMetadata = JSON.parse(
  readFileSync(join(root, "src", "data", "release-metadata.json"), "utf8"),
);
const releaseSlugs = Object.keys(releaseMetadata.apps).sort();
if (JSON.stringify(appDirectories) !== JSON.stringify(releaseSlugs)) {
  errors.push(
    `release metadata apps do not match app pages (${releaseSlugs.length} metadata, ${appDirectories.length} pages)`,
  );
}
for (const [slug, release] of Object.entries(releaseMetadata.apps)) {
  if (!release.sourceReleaseUrl) {
    errors.push(`release metadata is incomplete for ${slug}`);
  }
  if (release.sourceKind !== "repository" && !release.sourceVersion) {
    errors.push(`release metadata has no version for ${slug}`);
  }
  if (release.sourceKind === "release" && !release.publishedAt) {
    errors.push(`release metadata has no publication date for ${slug}`);
  }
  if (release.sourceKind === "tag" && !release.sourceTag) {
    errors.push(`tag metadata is incomplete for ${slug}`);
  }
}

if (errors.length > 0) {
  console.error(`Built-site audit failed with ${errors.length} problem(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Built-site audit passed: ${primaryHtmlFiles.length} pages, ${checkedLinks} links, ${checkedImages} images, ${canonicalPaths.size} canonical routes, ${appDirectories.length} apps, no generated JavaScript.`,
);
