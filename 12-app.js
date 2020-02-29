// const counter = require("./module/myModule");

// counter.inc();
// counter.inc();
// console.log(counter.getCount());

// counter.dec();
// console.log(counter.getCount());

//destructuring
const { inc, dec, getCount } = require("./module/myModule");

inc();
inc();
console.log(getCount());

dec();
console.log(getCount());