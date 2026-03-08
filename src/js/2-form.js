// console.log('Form');
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', e => {
  const formData = new FormData(refs.form);

  const obj = {
    email: formData.get('email'),
    message: formData.get('message'),
  };

  console.log(obj);

  const zip = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, zip);
});

document.addEventListener('DOMContentLoaded', e => {
  const storageData = localStorage.getItem(STORAGE_KEY);

  const data = JSON.parse(storageData);
  refs.form.elements.email.value = data.email.trim();
  refs.form.elements.message.value = data.message.trim();
});
