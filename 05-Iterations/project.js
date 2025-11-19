// Guess the Number Game (Node.js Version)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secret = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function askGuess() {
    rl.question("Guess a number between 1 and 10: ", function (answer) {
        const guess = parseInt(answer);
        attempts++;

        if (guess === secret) {
            console.log(`Correct! You guessed it in ${attempts} attempts.`);
            rl.close();
        } else {
            console.log("Wrong! Try again.\n");
            askGuess(); // ask again until correct
        }
    });
}

askGuess();
