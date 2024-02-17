import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import alertIcon from "../img/alert-sign.png";

const dateTimePicker = document.getElementById("datetime-picker");
const startBtn = document.getElementById("start-btn");
const daysValue = document.querySelector("span[data-days]");
const hoursValue = document.querySelector("span[data-hours]");
const minutesValue = document.querySelector("span[data-minutes]");
const secondsValue = document.querySelector("span[data-seconds]");

let countdownInterval;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate <= currentDate) {
      startBtn.disabled = true;
      iziToast.error({
        title: "Error",
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        titleColor: '#fff',
        iconUrl: alertIcon,
        message: "Please, choose date in the future!",
      });
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

const addLeadingZero = (value) => {
  return value < 10 ? "0" + value : value;
};

startBtn.disabled = true;
startBtn.addEventListener("click", () => {
  if (countdownInterval) return; 
  const endDate = userSelectedDate.getTime();

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
        title: "Успішно",
        message: "Таймер завершено!",
      });
      countdownInterval = null;
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
