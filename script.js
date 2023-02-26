'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessag = function (message) {
    document.querySelector('.message').
        textContent = message;
}
document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);


        if (!guess)
            displayMessag('🚫no number');
        else if (guess === secretNumber) {
            displayMessag('🍕correct number');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if (guess != secretNumber) {
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;

                displayMessag(guess > secretNumber
                    ? '📈too high' : '📉too low');
            }
            else {
                // document.querySelector('.message').
                //     textContent = ' 🌤you lost the game';
                displayMessag(' 🌤you lost the game');
            }
        }
    }

    //     else if (guess >secretNumber) {
    //         if (score > 1) {
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //             document.querySelector('.message').
    //                 textContent = '📉too high';
    //         }
    //         else {
    //             document.querySelector('.message').
    //                 textContent = ' 🌤you lost the game ';
    //         }


    //     }
    //     else if (guess < secretNumber) {
    //         if (score > 1) {
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //             document.querySelector('.message').
    //                 textContent = '📉too low';
    //         }
    //         else {
    //             document.querySelector('.message').
    //                 textContent = ' 🌤you lost the game ';
    //         }


    //     }
    // }
);
document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        // document.querySelector('.message').textContent = 'Start guessing....';
        displayMessag('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';


    }
)

