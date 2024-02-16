import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const dateTimePicker = document.getElementById("datetime-picker");
const startBtn = document.getElementById("start-btn");
const daysValue = document.querySelector("span[data-days]");
const hoursValue = document.querySelector("span[data-hours]");
const minutesValue = document.querySelector("span[data-minutes]");
const secondsValue = document.querySelector("span[data-seconds]");

let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(dateTimePicker, options)

const addLeadingZero = (value) => {
  return value < 10 ? "0" + value : value;
};

dateTimePicker.addEventListener("input", () => {
  const selectedDate = new Date(dateTimePicker.value);
    const currentDate = new Date();
  
  if (selectedDate < currentDate) {
    startBtn.disabled = true;
      iziToast.error({
        title: "Error",
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        titleColor: '#fff',
        icon: '../img/close.png',
        iconUrl: "../img/alert-sign.png",
      message: "Illegal operation",
    });
  } else {
    startBtn.disabled = false;
  }
});

startBtn.disabled = true;
startBtn.addEventListener("click", () => {

    const endDate = new Date(dateTimePicker.value).getTime();

  countdownInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const remainingTime = endDate - currentDate;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      daysValue.textContent = "00";
      hoursValue.textContent = "00";
      minutesValue.textContent = "00";
      secondsValue.textContent = "00";
      iziToast.success({
        title: "Success",
        message: "Countdown finished!",
      });
    } else {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);
      daysValue.textContent = addLeadingZero(days);
      hoursValue.textContent = addLeadingZero(hours);
      minutesValue.textContent = addLeadingZero(minutes);
      secondsValue.textContent = addLeadingZero(seconds);
    }
  }, 1000);
    startBtn.disabled = true;
    dateTimePicker.disabled = true;
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
