const goals = [8, 1, 1, 3, 2, -1, 5];
//1
function maxNumberOfGoals(array) {
  let maxGoal = Math.max.apply(null, array);
  let indexMaxGoal = array.indexOf(maxGoal);
  alert(
    `Самый результативный матч был под номером ${
      indexMaxGoal + 1
    }. В нем было забито ${maxGoal} гол(ов).`
  );
}

maxNumberOfGoals(goals);

//2
function minNumberOfGoals(array) {
  let goalsAboveZero = array.filter((item) => {
    return item >= 0;
  });
  let minGoal = Math.min.apply(null, goalsAboveZero);
  let allMinIndex = [];

  goalsAboveZero.forEach((el, index) => {
    if (el === minGoal) {
      allMinIndex.push(index + 1);
    }
  });
  return alert(
    `Самые нерезультативные матчи были под номерами ${allMinIndex}. В каждом из них было забито по ${minGoal} мячу(а).`
  );
}

minNumberOfGoals(goals);

//3
function totalGoals(array) {
  let sumOfGoals = array.reduce((acc, goal) => {
    if (goal >= 0) {
      acc += goal;
    }
    return acc;
  }, 0);
  alert(`Общее количество голов за сезон равно ${sumOfGoals}`);
}
totalGoals(goals);

//4
function absoluteDefeat(array) {
  let defeat = array.includes(-1);
  if (defeat) {
    alert(`Были автоматические поражения: да`);
    return;
  }
  alert(`Были автоматические поражения: нет`);
}
absoluteDefeat(goals);

//5
function averageOfGoals(array) {
  let sumOfGoals = array.reduce((acc, goal) => {
    if (goal >= 0) {
      acc += goal;
    }
    return acc;
  }, 0);
  let goalsAboveZero = array.filter((item) => {
    return item >= 0;
  });
  let average = sumOfGoals / goalsAboveZero.length;
  average = average.toFixed(2);

  alert(`Среднее количество голов за матч равно ${average}`);
}

averageOfGoals(goals);

//6
function sortOfGoals(array) {
  let goalsAboveZero = array.filter((item) => {
    return item >= 0;
  });
  goalsAboveZero.sort((a, b) => {
    return a - b;
  });
  alert(`${goalsAboveZero}`);
}

sortOfGoals(goals);
console.log(goals);
