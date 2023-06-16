let nowDate = new Date();

function getDaysBeforeBirthday(nextBirthdayDate) {
  let nextBirthday = new Date(nextBirthdayDate).getTime() - nowDate.getTime();
  let minutes = Math.round(nextBirthday / 60000);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);
  nextBirthday = days;
  return nextBirthday;
}

console.log(getDaysBeforeBirthday("2023 09 18"));