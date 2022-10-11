const path = require('path');

const processJsPath = path.resolve(__dirname, 'process.js');
console.log(processJsPath);

console.log(path.basename(processJsPath));
console.log(path.parse(processJsPath));

