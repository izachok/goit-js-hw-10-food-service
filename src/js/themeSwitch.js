const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');

export default function setupThemeSwither() {
  themeSwitchRef.addEventListener('click', onThemeSwitchClick);
  setThemeSwitch(localStorage.getItem('theme'));
}

function onThemeSwitchClick(event) {
  if (event.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
    setThemeSwitch(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    setThemeSwitch(Theme.LIGHT);
  }
}

function setThemeSwitch(theme) {
  if (theme === Theme.DARK) {
    themeSwitchRef.checked = true;
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    themeSwitchRef.checked = false;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}
