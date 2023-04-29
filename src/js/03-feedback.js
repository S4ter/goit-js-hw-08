import { throttle } from 'lodash';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

const saveInputs = throttle(() => {
  const values = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(values));
}, 500);

emailInput.addEventListener('input', saveInputs);
messageInput.addEventListener('input', saveInputs);

window.addEventListener('load', () => {
  const getValues = localStorage.getItem('feedback-form-state');
  if (getValues > '') {
    const values = JSON.parse(getValues);
    emailInput.value = values.email;
    messageInput.value = values.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const values = localStorage.getItem('feedback-form-state');
  console.log(values);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
