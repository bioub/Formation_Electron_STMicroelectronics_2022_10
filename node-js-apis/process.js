// (function (exports, require, module, __filename, __dirname) {
  console.log(process.platform); // darwin, win32, linux
  process.chdir(__dirname);
  console.log(process.cwd()); // /Users/romain/Desktop/Training-Electron

  console.log(process.env.PATH);

  console.log(process.versions);
// })