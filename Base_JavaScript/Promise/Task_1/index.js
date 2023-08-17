fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }
    return response.json();
  })
  .then((data) => {
    listUsers(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';
  });

function listUsers(users) {
  const list = document.querySelector('#data-container');

  for (const user of users) {
    const listItem = document.createElement('li');
    const linkListItem = document.createElement('a');
    linkListItem.href = '#';
    linkListItem.textContent = user.name;
    listItem.append(linkListItem);
    list.prepend(listItem);
  }
}
