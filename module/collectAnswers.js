const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Here, done = f => f is a dummy function so that if done function is not invoked
// where collectAnswer is called, it does not throw an error
const collectAnswers = (questions, done = f => f) => {
    const answers = [];
    const [ firstQuestion ] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered);
};

module.exports = collectAnswers;
