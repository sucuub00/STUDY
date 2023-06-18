let now = new Date();
console.log(now);

const addZero = (number) => (number < 10 ? `0${number}` : number);

function newDay(date, separator = '.') {
  let day = date.getUTCDate();
  day = addZero(day);

  let month = date.getUTCMonth() + 1;
  month = addZero(month);

  let year = date.getUTCFullYear();
  let newDate = day + separator + month + separator + year;

  return newDate;
}

console.log(newDay(now));
