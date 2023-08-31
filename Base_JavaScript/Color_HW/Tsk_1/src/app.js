import { getRandomColor } from './utils/utils'

export function initApp() {
  const btn = document.createElement('button');
  btn.className = 'button';
  btn.textContent = 'Изменить цвет страницы';

  document.body.append(btn);
  btn.addEventListener('click', () => {
    const bodyColor = getRandomColor();
    document.body.style.background = bodyColor;
  });
}
