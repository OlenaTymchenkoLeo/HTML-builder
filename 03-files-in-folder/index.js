const { readdir, stat } = require('fs/promises');
const path = require('path');
const folder = path.join(__dirname, 'secret-folder');

async function getFiles() {
const files = await readdir(folder, {withFileTypes: true});

for (const file of files) {
  if (file.isFile()) {
  const name = path.parse(file.name).name;
  const info = await stat(path.join(folder, file.name))
  const extension = path.parse(file.name).ext.replace('.', '');
  const size = info.size + 'b';
  console.log(`${name} - ${extension} - ${size}`);
  }
}
}
getFiles();