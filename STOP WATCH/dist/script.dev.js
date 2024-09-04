"use strict";

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var timer;
var isRunning = false;
var display = document.getElementById("display");
var startPauseBtn = document.getElementById("startPauseBtn");
var resetBtn = document.getElementById("resetBtn");

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

  var minStr = minutes < 10 ? "0".concat(minutes) : minutes;
  var secStr = seconds < 10 ? "0".concat(seconds) : seconds;
  var msStr = milliseconds < 100 ? "0".concat(milliseconds / 10) : milliseconds / 10;
  display.textContent = "".concat(minStr, ":").concat(secStr, ":").concat(msStr);
}

startPauseBtn.addEventListener("click", function () {
  if (isRunning) {
    clearInterval(timer);
    startPauseBtn.textContent = "Start";
  } else {
    timer = setInterval(updateTime, 10);
    startPauseBtn.textContent = "Pause";
  }

  isRunning = !isRunning;
});
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  display.textContent = "00:00:00";
  startPauseBtn.textContent = "Start";
});
//# sourceMappingURL=script.dev.js.map
