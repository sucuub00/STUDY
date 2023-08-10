const body = document.querySelector('body');
//INNER_HTML
// body.innerHTML = `<form class="create-user-form">
// <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
//     Подтвердить
// </button>
// </form>`;

//CREATE_ELEMENT
const newForm = document.createElement('form');
newForm.className = 'create-user-form';

const firstLabel = document.createElement('label');
firstLabel.textContent = 'Имя';

const firstInput = document.createElement('input');
firstInput.type = 'text';
firstInput.name = 'userName';
firstInput.placeholder = 'Введите ваше имя';

const secondLabel = document.createElement('label');
secondLabel.textContent = 'Пароль';

const secondInput = document.createElement('input');
secondInput.type = 'password';
secondInput.name = 'password';
secondInput.placeholder = 'Придумайте Пароль';

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';

//INSERT
body.insertAdjacentElement('afterbegin', newForm);

newForm.insertAdjacentElement('beforeend', firstLabel);
firstLabel.insertAdjacentElement('beforeend', firstInput);

newForm.insertAdjacentElement('beforeend', secondLabel);
secondLabel.insertAdjacentElement('beforeend', secondInput);

newForm.insertAdjacentElement('beforeend', button);
