// this script is run as a pre-commit hook
// it generates index.ts files in each low-level dir that exports all the files in that dir
// this makes the imports shorter and easier to read

const fs = require('fs');
const path = require('path');
const SRC_DIR = 'src';

function main() {
  getDirs(path.join(__dirname, SRC_DIR));
}

function getDirs(dirPath) {
  const dirs = fs.readdirSync(dirPath).filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
  const files = fs.readdirSync(dirPath).filter((file) => fs.statSync(path.join(dirPath, file)).isFile());
  console.log(`dirs: ${dirs}`);
  console.log(`files: ${files}`);
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
    indexFileContent = `export * from './${baseName}';\n`;
  });
  fs.writeFileSync(indexFile, indexFileContent);
}

main();
