//Refactoring 11-questions-readline.js in order to 
//use custom module from module/collectAnswers.js

const collectAnswers = require("./module/collectAnswers")

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

//collectAnswers(questions); //done function is not invoked here

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
