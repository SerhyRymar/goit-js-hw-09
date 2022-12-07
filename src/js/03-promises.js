// 1. Підключаємо бібліотеку 
import Notiflix from 'notiflix';


// 2. Знаходимо посилання 
const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);


/*3. Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) 
стільки разів, скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position),
що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).*/

function onFormSubmit(e) {
  e.preventDefault();

  let mainDelay = e.currentTarget.delay.valueAsNumber;
  const delayStep = e.currentTarget.step.valueAsNumber;
  const amountOfPromise = e.currentTarget.amount.valueAsNumber;

  for (let position = 1; position <= amountOfPromise; position += 1) {
    createPromise(position, mainDelay);
    mainDelay += delayStep;
  }
}

/*4. Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
який виконується або відхиляється через delay часу.Значенням промісу повинен бути об'єкт,
в якому будуть властивості position і delay зі значеннями однойменних параметрів.*/

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const random = Math.random() > 0.3;

    setTimeout(() => {
      if (random) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
