let seconds = 0;
const timerElement = document.getElementsByClassName('timer');

function updateTimer() {
  seconds++;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  timerElement[0].textContent = `${formattedMinutes}:${formattedSeconds}`;
}
setInterval(updateTimer, 1000);