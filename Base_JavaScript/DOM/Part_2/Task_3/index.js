const form = document.querySelector('.create-task-block');
const tasksList = document.querySelector('.tasks-list');
const errorBlock = document.querySelector('.error-message-block');

function myCreateElement(text, id) {
  const task = document.createElement('div');
  task.id = id;
  task.className = 'task-item';
  const span = document.createElement('span');
  span.textContent = text;
  task.append(span);
  const btnDelete = document.createElement('button');
  btnDelete.className = 'task-item__delete-button';
  btnDelete.textContent = 'Удалить';
  task.append(btnDelete);
  return task;
}

function validateEmpty(value) {
  if (!value.trim()) {
    errorBlock.innerHTML = `<span>Название задачи не должно быть пустым.</span>`;
    return false;
  }
  errorBlock.innerHTML = '';
  return true;
}

function validateTask(value) {
  const result = tasks.some((task) => {
    return task.text.trim().toLowerCase() === value.trim().toLowerCase();
  });
  if (result) {
    errorBlock.innerHTML = `<span>Задача с таким названием уже существует.</span>`;
    return false;
  }
  errorBlock.innerHTML = '';
  return true;
}

function validate(value) {
  if (!validateEmpty(value) || !validateTask(value)) {
    return false;
  }
  return true;
}

const tasks = [];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;
  const { taskName: input } = target.elements;
  const { value } = input;
  if (validate(value)) {
    tasks.push({
      text: value,
      id: Date.now(),
    });
    const task = myCreateElement(value, Date.now());
    tasksList.insertAdjacentElement('beforeend', task);
  }
});

///Task 3

function createModalWindow() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay modal-overlay_hidden';

  const modalContent = document.createElement('div');
  modalContent.className = 'delete-modal';

  const title = document.createElement('h3');
  title.className = 'delete-modal__question';
  title.textContent = ' Вы действительно хотите удалить эту задачу?';

  const actions = document.createElement('div');
  actions.className = 'delete-modal__buttons';

  const btnCancel = document.createElement('button');
  btnCancel.className = 'delete-modal__button delete-modal__cancel-button';
  btnCancel.textContent = 'Отмена';

  const btnDelete = document.createElement('button');
  btnDelete.className = 'delete-modal__button delete-modal__confirm-button';
  btnDelete.textContent = 'Удалить';

  modalContent.append(title);
  actions.append(btnCancel);
  actions.append(btnDelete);
  modalContent.append(actions);
  modal.append(modalContent);
  document.body.append(modal);
}

createModalWindow();

const modalWindow = document.querySelector('.modal-overlay');
const modalActions = modalWindow.querySelector('.delete-modal__buttons');



tasksList.addEventListener('click', (event) => {
  const { target } = event;
  console.log(target);
  if (target.classList.contains('task-item__delete-button')) {
    // modalWindow.classList.remove('modal-overlay_hidden');
    const task = target.closest('.task-item');
    console.log(task);
  }
});

function showModal(taskId){
  modalActions.addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('delete-modal__cancel-button')) {
      modalWindow.classList.add('modal-overlay_hidden');
    }
    if (target.classList.contains('delete-modal__confirm-button')) {
      console.log(event);
    }
  });
}

function removeTask(taskId) {
  
}
