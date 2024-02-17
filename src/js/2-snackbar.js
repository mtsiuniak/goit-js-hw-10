import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const delayInput = form.querySelector('input[name="delay"]');
  const delay = parseInt(delayInput.value);

  const stateInput = form.querySelector('input[name="state"]:checked');
  const state = stateInput.value;

    const promise = new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => {
          resolve(delay);
        }, delay);
      } else if (state === 'rejected') {
        setTimeout(() => {
          reject(delay);
        }, delay);
      }
    });

    promise.then((delay) => {
      iziToast.success({
          title: "Ok",
          titleColor: '#fff',
          iconUrl: './img/ok.png',
          iconColor: '#fff',
          backgroundColor: '#59A10D',
          messageColor: '#fff',
        message: `Fulfilled promise in ${delay}ms`
      });
    })
        .catch((delay) => {
      iziToast.error({
         title: "Error",
          titleColor: '#fff',
          iconUrl: './img/error.png',
          iconColor: '#fff',
          backgroundColor: '#B51B1B',
          messageColor: '#fff',
        message: `Rejected promise in ${delay}ms`
      });
    });
  
    form.reset();
});
