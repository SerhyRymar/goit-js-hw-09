// 1. Знаходимо усі посилання

const startBut = document.querySelector('[data-start]');
const stopBut = document.querySelector('[data-stop]');
const body = document.querySelector('body');


// 2. Напиши скрипт, який після натискання кнопки «Start», раз на секунду 
// змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

const bodyColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      bodyRandomColorChanger();
    }, 1000);

    startBut.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    startBut.disabled = false;
  },
};

startBut.addEventListener('click', () => {
  bodyColor.start();
});

stopBut.addEventListener('click', () => {
  bodyColor.stop();
});

// 3. Для генерування випадкового кольору використовуй функцію

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bodyRandomColorChanger() {
  body.style.backgroundColor = getRandomHexColor();
}
