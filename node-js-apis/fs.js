const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const processJsPath = path.resolve(__dirname, 'process.js');

const buffer = fs.readFileSync(processJsPath);
console.log(buffer.toString('utf-8'));

fsp.readFile(processJsPath).then((buffer) => {
  console.log(buffer.toString('utf-8'));
});


async function readFile() {
  const buffer = await fsp.readFile(processJsPath);
  console.log(buffer.toString('utf-8'));
}

readFile()