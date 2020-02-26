console.log(process.pid);
console.log(process.versions.node);

console.log(process.argv);


const [, , firstName, lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}`);
// type in console node fileName firstName lastName
