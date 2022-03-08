# lib

This repo contains the types and common utils used across different infinity repos. These are deployed as an `npm package: @infinityxyz/lib`.

To add a new type or util, just create a `.ts` file in an approproate location and push to `main` branch (or raise a PR).

A pre-commit hook creates a top-level `index.ts` file in each directory to keep imports shorter in other files.

Pushing to `main` bumps the patch version number in `package.json` file which triggers a new `npm publish` via a `Github Action`.

Once the new package is available run `npm update` or `npm run update-lib` in other repos to fetch latest changes. `npm run update-lib` also runs as part of `npm run dev` and `npm run build`.
