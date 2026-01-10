// const form = document.querySelector('form');
// const num = Math.floor(Math.random() * 100) + 1;
// let subt = document.querySelector('#subt');
// subt.style.fontSize ="20px";
// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const inp = parseInt(document.querySelector('#guessField').value);

//   if (inp === num) {
//     subt.value = 'YOU GUESSED IT RIGHT';
//   } else {
//     subt.value = 'WRONG GUESS by your side';
//   }

//   console.log('Form submitted');
// });

let randnum = parseInt(Math.random() * 100) + 1;

const div = document.querySelector('div');
const submit = document.querySelector('#subt');
const inp = document.querySelector('#guessField');
const prevguess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let previous = [];
let numguesses = 1;

let isplaying = true;

if (isplaying) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(inp.value);
    console.log(guess);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert('enter the valid number');
  } else if (guess < 1) {
    alert('please  enter number greater than 1');
  } else if (guess > 100) {
    alert('enter a number less than 100');
  } else {
    previous.push(guess);
    if (numguesses === 11) {
      endgame();
    } else {
      displayguesses(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randnum) {
    displayMessage(' congratulation! you guessed it right');
  } else if (guess < randnum) {
    displayMessage('think of a bigger number');
  } else if (guess > randnum) {
    displayMessage('think of a smaller number');
  }
}

function displayguesses(guess) {
  inp.value = '';
  prevguess.innerHTML += `${guess}, `;
  numguesses++;
  remaining.innerHTML = `${11 - numguesses} `;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endgame() {
  inp.value = '';
  inp.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  isplaying = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previous = [];
    numguesses = 1;
    prevguess.innerHTML = '';
    remaining.innerHTML = `${11 - numguesses} `;
    inp.removeAttribute('disabled');
    startOver.removeChild(p);

    isplaying = true;
  });
}
