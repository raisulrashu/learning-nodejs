console.log(__dirname); // directory name
console.log(__filename); // file name

const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);
