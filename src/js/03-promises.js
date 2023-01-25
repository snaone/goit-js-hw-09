import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};
const createPromisesBtn = document.querySelector('button');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

createPromisesBtn.addEventListener('click', onClick);

async function onClick(e) {
  e.preventDefault();
  let delayValue = 0;
  let firstDelay = Number(refs.delay.value);
  let delayStep = Number(refs.step.value);
  for (let i = 0; i < refs.amount.value; i++) {
    let delay = i === 0 ? firstDelay : delayStep;
    delayValue += delay;
   await createPromise(1 + i, delay)
      .then(({ position}) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayValue}ms`
        );
      })
      .catch(({ position}) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayValue}ms`
        );
      });
  }
}