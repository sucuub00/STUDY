const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
];

const newArray = users.filter((item) => {
  return item.status === 'online';
});

let onlineUsersName = newArray.map(item => {
  return item.username
});

onlineUsersName = onlineUsersName.join(', ')
console.log(onlineUsersName);

alert(`Сейчас в онлайн следующие пользователи: ${onlineUsersName}`);
