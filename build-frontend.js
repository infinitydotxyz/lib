/* eslint-disable @typescript-eslint/no-var-requires */

const { compileFromOptions } = require('strip-decorators');
const tsconfig = require('./tsconfig.json');
const { join } = require('path');
const { readdirSync } = require('fs');

function readEntrypoints(source) {
  return readdirSync(source, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .flatMap((item) => {
      const path = `${source}/${item.name}`;
      const entrypoints = readEntrypoints(path); // recursively look for entrypoints in subdirectories
      entrypoints.push(`${path}/index.ts`); // add the entrypoint from the current top level
      return entrypoints;
    });
}

const src = join(__dirname, 'src');

const entrypoints = readEntrypoints(src);

function main() {
  console.log('Creating frontend-specific build...');
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  compileFromOptions(entrypoints, { ...tsconfig.compilerOptions, outDir: './frontend/dist' });
}

main();
