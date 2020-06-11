import localStorage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const lastTheme = localStorage.load('theme');
const status = localStorage.load('isChecked');

if (status) {
  ref.body.classList.add(lastTheme);
  ref.input.checked = status;
}

ref.input.addEventListener('change', checkControl);

function checkControl(e) {
  e.preventDefault();

  const bodyClass = ref.body.classList;
  const isChecked = e.target.checked;

  if (isChecked) {
    bodyClass.add(Theme.DARK);
    bodyClass.remove(Theme.LIGHT);
    localStorage.save('theme', Theme.DARK);
    localStorage.save('isChecked', isChecked);
    return;
  }

  bodyClass.remove(Theme.DARK);
  bodyClass.add(Theme.LIGHT);
  localStorage.save('theme', Theme.LIGHT);
  localStorage.save('isChecked', isChecked);
}
