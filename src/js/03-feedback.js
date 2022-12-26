import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
const DATA_KEY = 'feedback-form-state';

if (savedData) {
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

form.addEventListener('input', throttle(getAElements, 1000));
form.addEventListener('submit', getData);
function getAElements(evt) {
  evt.preventDefault();
  const formObj = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(DATA_KEY, JSON.stringify(formObj));
}

function getData(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.currentTarget.reset();
  localStorage.removeItem(DATA_KEY);
}
