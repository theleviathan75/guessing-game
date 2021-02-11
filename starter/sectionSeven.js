'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 100;
let highScore = 0;
let playing = true;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      displayMessage('⛔ No Number!!');

      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      playing = false;
    }
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      // When guess is too high
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('🎇 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
