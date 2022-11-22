// Перемикач кольорів
// Є масив кольорів в hex-форматі і кнопки Start і Stop.

// Напиши скрипт, який після натискання кнопки Start, раз в секунду змінює колір
//  фону body на випадкове значення з масиву використовуючи інлайн-стиль.
//  При натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.
// ⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів.
// Зроби так, щоб поки зміна теми запушено, кнопка Start була не активна.

// Для генерації випадкового числа (індекс елемента масиву квітів), використовуй
//  функцію randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-action = "start"]'),
  stopBtn: document.querySelector('button[data-action = "stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let colorId = null;

refs.startBtn.addEventListener("click", onStartChange);
refs.stopBtn.addEventListener("click", onStopChange);

function onStartChange() {
  colorId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.startBtn.disabled = true;
}

function onStopChange() {
  clearInterval(colorId);
  refs.startBtn.disabled = false;
}
