'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('.hidden');

btnRoll.addEventListener('click', function () {
  // generate random number
  const dice = Math.trunc(Math.random() * 6) + 1; // 0-0.99

  //2. display dice roll
  dice.classList.remove('hidden');
  dice.src = 'dice-' + roll + '.png';

  if (dice !== 1) {
    //  add dice to current score
  } else {
    //  switch to next player
  }
});
