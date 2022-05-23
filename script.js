'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

// listen to the even on the check button
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
});
let secretNumber = Math.floor(Math.random() * 20 + 1);

console.log(secretNumber);
const listOfScores = [];
let maxScore = '0';
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = ' No number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = ' Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    let highScore = Number(document.querySelector('.score').textContent);
    listOfScores.push(highScore);
    maxScore = Math.max(...listOfScores);
    document.querySelector('.highscore').textContent = maxScore;
  } else if (guess > secretNumber) {
    let score = Number(document.querySelector('.score').textContent);
    console.log(score);
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      let score = Number(document.querySelector('.score').textContent);
      document.querySelector('.score').textContent = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < secretNumber) {
    let score = Number(document.querySelector('.score').textContent);
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low!';
      let score = Number(document.querySelector('.score').textContent);
      console.log(score);
      document.querySelector('.score').textContent = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});
