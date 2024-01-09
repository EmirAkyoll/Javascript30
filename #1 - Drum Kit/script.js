const keys = Array.from(document.querySelectorAll('.key'));

// define keys with them ASCII code
const keyCode = {
  A: 65,
  S: 83,
  D: 68, 
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode || keyCode[event.target.innerHTML]}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode || keyCode[event.target.innerHTML]}"]`);

  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

keys.forEach((key) =>
  key.addEventListener('click', (event) => {
    playSound(event);
  })
);