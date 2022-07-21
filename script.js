'use strict'
// this will increase the count of the number from 1 to 20;
let secretNumber = Math.trunc(Math.random()*20) + 1;


// the score is been store in the varible called the 'state'.
let score = 20;
let highScore = 0;

// This call back every message that is been given out.
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

 //  The condition given to the number to be guessed.
 if(!guess){
   displayMessage('\u{26D4}No number')

 }else if(guess === secretNumber){
  displayMessage('\u{1F389}There is a number number')
  document.querySelector('body').style.backgroundColor = 'green';
  document.querySelector('.number').textContent = secretNumber;

  // Implementing the highscore...
  if(score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  // When the guess is wrong
 }else if(guess !== secretNumber){
   if(score > 1){  
     displayMessage(guess > secretNumber ? '\u{1F4A2}Damn! Too high' : 'Too low value');
      score--;
      document.querySelector('.score').textContent = score;
  

 }else{
  displayMessage('\u{1F4A3}You lost the game.')
   document.querySelector('.score').textContent = 0;
 }
}
});

// This will restore the value to the default mode....(i.e Resetting the whole page of the game.)
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
 });
