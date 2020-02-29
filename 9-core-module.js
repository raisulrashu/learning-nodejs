const path = require("path");
const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);
console.log(__dirname);
console.log(`The file name is ${path.basename(__filename)}`);


const util = require("util");
util.log(path.basename(__filename));
util.log(" ^ Name of the current file");

const v8 = require("v8");
util.log(v8.getHeapStatistics());

//destructing
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
