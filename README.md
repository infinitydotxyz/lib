# lib

This repo contains the types and common utils used across different infinity repos. These are deployed as an npm package: `@infinityxyz/lib`.

To add a new type or util, just create a `.ts` file in an approproate location and push to `main` branch (or raise a PR).

`npm run build` creates a top-level `index.ts` file in each directory to keep imports shorter in other files.

Pushing to `main` bumps the patch version number in `package.json` file which triggers a new `npm publish` via a `Github Action`.

# Usage

From other repos, wait for the new package is available, run `npm update` or `npm run update:lib` to fetch latest changes. `npm run update:lib` also runs as part of `npm run dev` and `npm run build`.
