function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainEl = document.querySelector('body');
const controlEl = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

controlEl.stopBtn.disabled = true;

let timeId = null;

controlEl.startBtn.addEventListener('click', onClickStart);

controlEl.stopBtn.addEventListener('click', onClickStop);

function onClickStart(e) {
  timeId = setInterval(() => {
    mainEl.style.background = getRandomHexColor();
  }, 1000);
  controlEl.startBtn.disabled = true;
  controlEl.stopBtn.disabled = false;
}

function onClickStop(e) {
  clearInterval(timeId);
  controlEl.stopBtn.disabled = true;
  controlEl.startBtn.disabled = false;
}

console.log(controlEl);
