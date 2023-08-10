const form = document.querySelector('.create-task-block');
const tasksList = document.querySelector('.tasks-list');
const errorBlock = document.querySelector('.error-message-block');

function myCreateElement(text, id) {
  const task = document.createElement('div');
  task.id = id;
  task.textContent = text;
  task.className = 'task-item';
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
