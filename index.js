// this script is run as a pre-commit hook
// it generates index.ts files in each low-level dir that exports all the files in that dir
// this makes the imports shorter and easier to read

const fs = require('fs');
const path = require('path');
const SRC_DIR = 'src';
const INDEX_FILE = 'index';

function main() {
  console.log('Generating index.ts files...');
  getDirs(path.join(__dirname, SRC_DIR));
}

function getDirs(dirPath) {
  const dirs = fs.readdirSync(dirPath).filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
  const files = fs.readdirSync(dirPath).filter((file) => fs.statSync(path.join(dirPath, file)).isFile());
  // recurse into subdirs
  dirs.forEach((dir) => {
    getDirs(path.join(dirPath, dir));
  });

  // write index.ts for these files
  writeIndexTs(dirPath, files);
}

function writeIndexTs(dir, files) {
  const indexFile = path.join(dir, 'index.ts');
  let indexFileContent = '';
  files.forEach((file) => {
    const baseName = path.basename(file, '.ts');
    // ignore index files
    if (baseName !== INDEX_FILE) {
      indexFileContent += `export * from './${baseName}';\n`;
    }
  });
  // write only if content is not empty
  if (indexFileContent) {
    fs.writeFileSync(indexFile, indexFileContent);
  }
}

main();
