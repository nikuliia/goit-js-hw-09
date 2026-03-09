// console.log('Form');
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email]"'),
  message: document.querySelector('textarea[name="message"]'),
};

const formData = new FormData(refs.form);

refs.form.addEventListener('input', e => {
  const obj = {
    email: formData.get('email'),
    message: formData.get('message'),
  };

  //   console.log(obj);

  const zip = JSON.stringify(obj);
  localStorage.setItem(STORAGE_KEY, zip);
});

document.addEventListener('DOMContentLoaded', e => {
  const storageData = localStorage.getItem(STORAGE_KEY);

  const data = JSON.parse(storageData) || {};
  refs.form.elements.email.value = data.email || '';
  refs.form.elements.message.value = data.message || '';
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const obj = {
    email: formData.get('email').trim(),
    message: formData.get('message').trim(),
  };
  if (obj.email === '' || obj.message === '') {
    return alert(`Fill please all fields`);
  }
  console.log(obj);

  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
});
