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

function getUsersByIds(ids) {
  const requests = ids.map((el) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${el}`);
  });
  Promise.all(requests)
    .then((responses) => {
      const results = responses.map((el) => {
        return el.json();
      });
      return Promise.all(results);
    })
    .then((users) => {
      listUsers(users);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      const loader = document.querySelector('#loader');
      loader.style.display = 'none';
    });
}

getUsersByIds([5, 6, 2, 1]);
