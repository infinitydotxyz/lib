/* eslint-disable @typescript-eslint/no-var-requires */

const { compileFromOptions } = require('strip-decorators');
const tsconfig = require('./tsconfig.json');
const { join } = require('path');
const { readdirSync } = require('fs');

function getDirectories(source) {
  return readdirSync(source, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
}

const src = join(__dirname, 'src');
const dto = join(src, 'types', 'dto');

const entrypoints = getDirectories(dto).map((dirName) => join(dto, dirName, 'index.ts'));
entrypoints.push(join(dto, 'collections', 'nfts', 'index.ts')); // TODO: recursively scan subdirectories instead

function main() {
  console.log('Creating frontend-specific build...');
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  compileFromOptions(entrypoints, { ...tsconfig.compilerOptions, outDir: './frontend/dist' });
}

main();
