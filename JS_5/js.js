const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

let id1 = null;

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

start.addEventListener('click', function () {
  if (id1 === null) {   // ✅ prevent multiple intervals
    id1 = setInterval(function () {
      body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stop.addEventListener('click', function () {
  clearInterval(id1);
  id1 = null;           // ✅ reset
});
