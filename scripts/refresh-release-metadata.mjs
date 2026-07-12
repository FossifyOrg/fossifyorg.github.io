import { writeFile } from "node:fs/promises";
import { apps } from "../src/data/apps.ts";

const githubApi = "https://api.github.com";
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "fossify-site-release-refresh",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

class GitHubResponseError extends Error {
  constructor(response) {
    super(`${response.status} ${response.statusText}`);
    this.status = response.status;
  }
}

const fetchJson = async (path) => {
  const response = await fetch(`${githubApi}${path}`, { headers });

  if (!response.ok) {
    throw new GitHubResponseError(response);
  }

  return response.json();
};

const latestReleaseFor = (repo) =>
  fetchJson(`/repos/FossifyOrg/${repo}/releases/latest`);

const latestTagFor = async (repo) => {
  const tags = await fetchJson(`/repos/FossifyOrg/${repo}/tags?per_page=1`);
  return tags[0] ?? null;
};

const normalizeVersion = (tag) => tag.replace(/^v/i, "");
const releaseEntries = {};
const failures = [];

for (const app of apps) {
  try {
    try {
      const release = await latestReleaseFor(app.repo);
      const sourceTag = release.tag_name;

      releaseEntries[app.slug] = {
        title: app.title,
        repo: app.repo,
        sourceVersion: normalizeVersion(sourceTag),
        sourceTag,
        sourceKind: "release",
        sourceReleaseUrl: release.html_url,
        publishedAt: release.published_at ?? release.created_at ?? null,
      };
      continue;
    } catch (error) {
      if (!(error instanceof GitHubResponseError) || error.status !== 404) {
        throw error;
      }
    }

    const tag = await latestTagFor(app.repo);

    if (tag) {
      releaseEntries[app.slug] = {
        title: app.title,
        repo: app.repo,
        sourceVersion: normalizeVersion(tag.name),
        sourceTag: tag.name,
        sourceKind: "tag",
        sourceReleaseUrl: `https://github.com/FossifyOrg/${app.repo}/tree/${tag.name}`,
        publishedAt: null,
      };
    } else {
      releaseEntries[app.slug] = {
        title: app.title,
        repo: app.repo,
        sourceVersion: null,
        sourceTag: null,
        sourceKind: "repository",
        sourceReleaseUrl: app.links.github,
        publishedAt: null,
      };
    }
  } catch (error) {
    failures.push(
      `${app.repo}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

if (failures.length > 0) {
  throw new Error(
    `Release refresh failed; existing metadata was left unchanged.\n${failures.join("\n")}`,
  );
}

const metadata = {
  source: "GitHub Releases and Tags API",
  apps: Object.fromEntries(
    Object.entries(releaseEntries).sort(([left], [right]) =>
      left.localeCompare(right),
    ),
  ),
};

await writeFile(
  new URL("../src/data/release-metadata.json", import.meta.url),
  `${JSON.stringify(metadata, null, 2)}\n`,
);
