'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const winOverlay = function () {
  document.querySelector('body').style.backgroundColor = ' #60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.color = '#60b347';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.check').style.color = '#60b347';
  document.querySelector('.check').textContent = 'Congrats!';
  document.querySelector('.again').style.color = '#60b347';
};
const loseOverlay = function () {
  document.querySelector('.message').textContent = 'You lost the game 😥';
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = ' #C84646';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.color = '#C84646';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.check').style.color = '#C84646';
  document.querySelector('.check').textContent = ':(';
  document.querySelector('.again').style.color = '#C84646';
};
const resetToDefault = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = secretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').style.color = '#222';
  document.querySelector('.again').style.color = '#222';
};
const setHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no imput
  if (!guess) {
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    winOverlay();
    if (score > highscore) {
      highscore = score;
      setHighScore(highscore);
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👇 Too high...' : '👆 Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      loseOverlay();
    }
  }
  // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👆 Too high...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😥';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = ' #C84646';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').style.color = '#C84646';
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.check').style.color = '#C84646';
  //     document.querySelector('.check').textContent = ':(';
  //     document.querySelector('.again').style.color = '#C84646';
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '👇 Too low...';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 😥';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = ' #C84646';
  //     document.querySelector('.number').style.width = '30rem';
  //     document.querySelector('.number').style.color = '#C84646';
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.check').style.color = '#C84646';
  //     document.querySelector('.check').textContent = ':(';
  //     document.querySelector('.again').style.color = '#C84646';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', resetToDefault);
