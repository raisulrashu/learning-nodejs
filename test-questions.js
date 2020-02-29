const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "Who? ",
    "What? ",
    "How ",
    "When? "
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [ firstQuestion ] = questions;

    rl.question(firstQuestion, questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    })
}

collectAnswers(questions, answers => {
    console.log('Thank you for answering');
    console.log(answers);
    process.exit();
})
