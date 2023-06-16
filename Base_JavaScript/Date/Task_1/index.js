let now = new Date();
console.log(now);

function newDay(date, separator = '.') {
  let day = date.getUTCDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let month = date.getUTCMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = date.getUTCFullYear();
  let newDate = day + separator + month + separator + year;
  return newDate;
}

console.log(newDay(now));
