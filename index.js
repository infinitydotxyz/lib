/* eslint-disable @typescript-eslint/no-var-requires */

// this script is run as a pre-commit hook
// it generates index.ts files in each low-level dir that exports all the files in that dir
// this makes the imports shorter and easier to read

const fs = require('fs');
const path = require('path');
const SRC_DIR = 'src';
const INDEX_FILE = 'index';

function main() {
  console.log('Generating index.ts files...');
  getDirs(path.join(__dirname, SRC_DIR), 0);
}

function getDirs(dirPath, depth) {
  const dirs = fs.readdirSync(dirPath).filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
  const files = fs.readdirSync(dirPath).filter((file) => fs.statSync(path.join(dirPath, file)).isFile());
  // recurse into subdirs
  dirs.forEach((dir) => {
    const nestedIndexFile = getDirs(path.join(dirPath, dir), depth + 1);
    if (nestedIndexFile) {
      files.push(nestedIndexFile);
    }
  });

  // write index.ts for these files
  const indexFile = writeIndexTs(dirPath, files, depth);
  return indexFile;
}

function writeIndexTs(dir, files, depth) {
  const indexFile = path.join(dir, 'index.ts');
  let indexFileContent = '';
  files.forEach((file) => {
    const baseName = path.basename(file, '.ts');
    const isSubDirIndexFile = baseName === INDEX_FILE && file.split('/').length === 2;
    // ignore index files
    if (baseName !== INDEX_FILE) {
      indexFileContent += `export * from './${baseName}';\n`;
    } else if (isSubDirIndexFile && depth > 1) {
      const subDirWithIndexFile = file.split('/')[0];
      indexFileContent += `export * from './${subDirWithIndexFile}';\n`;
    }
  });
  // write only if content is not empty
  if (indexFileContent) {
    fs.writeFileSync(indexFile, indexFileContent);
    const baseName = path.basename(dir);
    return path.join(baseName, 'index.ts');
  }
}

main();
