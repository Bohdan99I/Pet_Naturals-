/////////////////*clock*/////////////////////////////////
const clockElement = document.querySelector(".clock");
let timeInSeconds = 2 * 60 * 60;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateTimer() {
  clockElement.textContent = formatTime(timeInSeconds);
  if (timeInSeconds > 0) {
    timeInSeconds--;
  } else {
    clearInterval(timerInterval);
    clockElement.textContent = "Time has passed!";
  }
}

updateTimer();

const timerInterval = setInterval(updateTimer, 1000);

////////////////////////////////*date*///////////////////////////

const dateEl = document.getElementById("date");

function getTodayDate() {
  const today = new Date();

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const todayDate = formatter.format(today);

  dateEl.textContent = `Order date: ${todayDate}`;

  return todayDate;
}

getTodayDate();

/////////////////////////*phoneMask*///////////////////////////

const phoneMask = document.getElementById("phone");
if (phoneMask) {
  IMask(phoneMask, { mask: "+{38}(\\000) 000-00-00" });
}
