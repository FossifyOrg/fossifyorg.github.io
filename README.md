# Fossify website

Source code for [www.fossify.org](https://www.fossify.org).

## Local development

Node.js 24 is used in GitHub Actions.

```sh
npm ci
npm run dev
```

Run release check before merging:

```sh
npm run check
```

This formats-checks the repository, builds the static site, writes the legacy
`.html` privacy-policy aliases used by app-store listings, and audits the built
routes, links, images, release data, sitemap, and JavaScript output.

## Site data

- `src/data/apps.ts` contains the published app catalog, copy, links, and policy details.
- `src/data/release-metadata.json` is a checked-in snapshot of GitHub releases and tags.
- `src/data/site.ts` contains shared site links and the privacy-policy route list.

The weekly `Refresh release metadata` workflow opens or updates a pull request
when GitHub release data changes.

The site works without JavaScript, including navigation, mobile menus, and FAQs.
