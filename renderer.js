
document.addEventListener('DOMContentLoaded', () => {
const startPage = document.getElementById('start');
const timerPage = document.getElementById('workTimer');
const startButton = document.getElementById('startButton');

startButton.addEventListener("click", () => {
  startPage.classList.toggle('hidden');
  timerPage.classList.toggle('hidden');
  timerPage.classList.toggle('workTimer');
});
});