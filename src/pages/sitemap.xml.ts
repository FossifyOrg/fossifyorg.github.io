import type { APIRoute } from "astro";
import { apps } from "../data/apps";
import { navItems, policyRoutes, site } from "../data/site";

const staticRoutes = [
  "/",
  ...navItems.map((item) => item.href),
  "/install/",
  "/updates/",
  "/translations/",
  "/faq/",
  "/privacy/",
  "/press/",
  "/policy/",
];

const appRoutes = apps.map((app) => `/apps/${app.slug}/`);
const policyCanonicalRoutes = policyRoutes
  .filter((policy) => !policy.unlisted)
  .map((policy) => `/policy/${policy.slug}.html`);

const routes = Array.from(
  new Set([...staticRoutes, ...appRoutes, ...policyCanonicalRoutes]),
).sort();

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(new URL(route, site.url).toString())}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
