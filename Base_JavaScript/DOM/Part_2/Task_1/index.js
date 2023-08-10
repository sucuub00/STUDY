const form = document.querySelector('.create-task-block');
const tasksList = document.querySelector('.tasks-list');

const tasks = [];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;
  const { taskName: input } = target.elements;
  const { value } = input;
  tasks.push({
    text: value,
    id: Date.now(),
  });
  const task = myCreateElement(value, Date.now());
  tasksList.insertAdjacentElement('beforeend', task);
});

function myCreateElement(text, id) {
  const task = document.createElement('div');
  task.id = id;
  task.textContent = text;
  task.className = 'task-item';
  return task;
}
