const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
  formData = JSON.parse(storedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  const zip = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, zip);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return alert(`Fill please all fields`);
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
