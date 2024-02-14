let hr = document.querySelector(".hour-data");
let mi = document.querySelector(".min-data");
let se = document.querySelector(".sec-data");

hr.innerHTML = "0h";

let timeinmin = 10;
let timeinsec = timeinmin * 60;

function startTimer() {
  timeinsec--;
  let minutes = Math.floor(timeinsec / 60);
  let seconds = Math.floor(timeinsec % 60);

  if (timeinsec < 0) {
    mi.innerHTML = 0;
    se.innerHTML = 0;
    clearInterval(timerInterval);
    return;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 0) {
    seconds = "0" + seconds;
  }
  mi.innerHTML = minutes + "m";
  se.innerHTML = seconds + "s";
}

let timerInterval = setInterval(startTimer, 1000);
