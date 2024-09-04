let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer;
let isRunning = false;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTime() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const minStr = minutes < 10 ? `0${minutes}` : minutes;
  const secStr = seconds < 10 ? `0${seconds}` : seconds;
  const msStr = milliseconds < 100 ? `0${milliseconds / 10}` : milliseconds / 10;

  display.textContent = `${minStr}:${secStr}:${msStr}`;
}

startPauseBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    startPauseBtn.textContent = "Start";
  } else {
    timer = setInterval(updateTime, 10);
    startPauseBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  display.textContent = "00:00:00";
  startPauseBtn.textContent = "Start";
});
