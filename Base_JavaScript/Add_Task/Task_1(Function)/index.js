function checkQuestionAnswer(question, correctAnswer) {
  let questionForUser = prompt(question);

  if (questionForUser) {
    questionForUser = questionForUser.toLowerCase();
    questionForUser = questionForUser.trim();
  } else {
    alert(`Обновите страницу и введите значение`);
    return;
  }
  ////////////////////////////////////////////////////////////
  if (correctAnswer.toLowerCase() === questionForUser) {
    alert(`Правильный ответ!`);
  } else {
    alert(`Ответ неправильный!`);
  }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
