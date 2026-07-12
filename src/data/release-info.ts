import releaseMetadataJson from "./release-metadata.json";

type ReleaseSourceKind = "release" | "tag" | "repository";

export type ReleaseEntry = {
  title: string;
  repo: string;
  sourceVersion: string | null;
  sourceTag: string | null;
  sourceKind: ReleaseSourceKind;
  sourceReleaseUrl: string;
  publishedAt: string | null;
};

type ReleaseMetadata = {
  source: string;
  apps: Record<string, ReleaseEntry>;
};

export const releaseMetadata = releaseMetadataJson as ReleaseMetadata;
export const releaseEntries = releaseMetadata.apps;
export const releaseSourceLabel = "GitHub releases and tags";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export const formatReleaseDate = (isoDate: string | null | undefined) =>
  isoDate ? dateFormatter.format(new Date(isoDate)) : null;

export const releaseLinkFor = (slug: string, fallbackHref: string) =>
  releaseEntries[slug]?.sourceReleaseUrl ?? fallbackHref;

export const releaseVersionFor = (slug: string) =>
  releaseEntries[slug]?.sourceVersion ?? "No release published";

export const releaseActionLabelFor = (slug: string) => {
  const kind = releaseEntries[slug]?.sourceKind;

  if (kind === "release") {
    return "Release notes";
  }

  if (kind === "tag") {
    return "Source tag";
  }

  return "Source repository";
};

export const releaseDateLabelFor = (slug: string) => {
  const entry = releaseEntries[slug];
  const date = formatReleaseDate(entry?.publishedAt);

  if (date) {
    return `Released ${date}`;
  }

  if (entry?.sourceKind === "tag") {
    return `Latest source tag: ${entry.sourceTag}`;
  }

  return "No GitHub release or tag published";
};
