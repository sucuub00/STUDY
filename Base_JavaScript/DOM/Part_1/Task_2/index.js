const tasksList = document.querySelector('.tasks-list');

const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
];

tasks.forEach((task) => {
  const div = document.createElement('div');
  div.className = 'task-item';
  div.dataset.taskId = task.id;

  const template = `
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="${task.id}">
                <label for="${task.id}"></label>
            </form>
            <span class="task-item__text">
                ${task.text}
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
            Удалить
        </button>
    </div>
`;
  div.innerHTML = template;
  tasksList.insertAdjacentElement('beforeend', div);
});
