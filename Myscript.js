'use strict';

// gamerules: ♦
/*
GAME RULES
* On a turn, a player rolls the die 🎲 repeatedly. The goal is to accumulate as many points as possible, adding up (hold) the numbers rolled on the die 🎲. However, if a player rolls a 1, the player's turn is over and any points they have accumulated during this turn are forfeited. Rolling a 1 doesn't wipe out your entire score from previous turns, just the total earned during that particular roll. A player has to choose to hold (stop rolling the die 🎲) if they do not want to take a chance of rolling a 1 and losing all of their points from this turn. If the player chooses to hold, all of the points rolled during that turn are added to his or her score. When a player reaches a total of 100 points, the game ends and that player is the winner.
*/

let player1, player2, currentScore1, currentScore2, totalScore1, totalScore2;

// created varible for Elements
const p1ScoreEL = document.querySelector('#score--0');
const p2ScoreEL = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const currentScorep1 = document.querySelector('#current--0');
const currentScorep2 = document.querySelector('#current--1');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const secPlayer1 = document.querySelector('.player--0');
const secPlayer2 = document.querySelector('.player--1');
const gameRules = document.querySelector('.game-rules');
const gameRulesBoard = document.querySelector('.game-rules-board');
const overlay = document.querySelector('.over');

function init() {
  player1 = true; //0
  player2 = false; //1
  currentScore1 = 0;
  currentScore2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  secPlayer1.classList.remove('player--winner');
  secPlayer2.classList.remove('player--winner');
  secPlayer1.classList.add('player--active');
  secPlayer2.classList.remove('player--active');

  // display currentScore to 0
  currentScorep1.textContent = 0;
  currentScorep2.textContent = 0;

  // scores back to 0 and dice disply set to none
  p1ScoreEL.textContent = 0;
  p2ScoreEL.textContent = 0;
  dice.classList.add('hidden');
}
init();
function playersTurn() {
  if (player1) {
    currentScore1 = 0;
    currentScorep1.textContent = currentScore1;
    player1 = false;
    player2 = true;
    secPlayer2.classList.add('player--active');
    secPlayer1.classList.remove('player--active');
  } else if (player2) {
    currentScore2 = 0;
    currentScorep2.textContent = currentScore2;
    player2 = false;
    player1 = true;
    secPlayer1.classList.add('player--active');
    secPlayer2.classList.remove('player--active');
  }
  return `${player1} ${player2}`;
}

// console.log('playersreturn ' + playersTurn());

// displayDiceroll function
function displayDiceroll(roll) {
  dice.classList.remove('hidden');
  dice.src = 'dice-' + roll + '.png';

  if (player1) {
    currentScore1 = currentScore1 + roll; //variable
    currentScorep1.textContent = currentScore1; //element
    p1ScoreEL.textContent = totalScore1;
  } else if (player2) {
    currentScore2 = currentScore2 + roll;
    currentScorep2.textContent = currentScore2;
    p2ScoreEL.textContent = totalScore2;
  }

  if (roll === 1) {
    playersTurn();
  }
}

// rollDice function
function rollDice() {
  let ranNumber = Math.trunc(Math.random() * 6 + 1);
  displayDiceroll(ranNumber);
  console.log(ranNumber);
}

// function hold
function hold() {
  totalScore1 = totalScore1 + currentScore1;
  totalScore2 = totalScore2 + currentScore2;
  p1ScoreEL.textContent = totalScore1;
  p2ScoreEL.textContent = totalScore2;
  if (player1 && totalScore1 >= 100) {
    secPlayer1.classList.add('player--winner');
  }
  if (player2 && totalScore2 >= 100) {
    secPlayer2.classList.add('player--winner');
  } else playersTurn();
}

//  add EventListener to rolldice button
btnRoll.addEventListener('click', rollDice);

// add Eventlistener to Hold button
btnHold.addEventListener('click', hold);

// btn NewGame adding EVent listener
btnNew.addEventListener('click', init);

gameRules.addEventListener('click', function () {
  gameRulesBoard.classList.remove('hidden');
  overlay.classList.add('overlay');
});

function closeGameRules() {
  if (!gameRulesBoard.classList.contains('hidden')) {
    gameRulesBoard.classList.add('hidden');
    overlay.classList.remove('overlay');
  }
}
overlay.addEventListener('click', closeGameRules);
gameRulesBoard.addEventListener('click', closeGameRules);
