import './index.css';

const cookie = document.querySelector('.cookie-consent2');
const btn = cookie.querySelector('.cookie-consent2__button');

function hiddenCookie() {
  cookie.classList.add('hide');
}

btn.addEventListener('click', () => {
  hiddenCookie();
  localStorage.setItem('hidden', 'true');
});

if (localStorage.getItem('hidden') === 'true') {
  hiddenCookie();
}
