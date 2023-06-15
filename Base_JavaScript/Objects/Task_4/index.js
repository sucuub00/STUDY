const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

function giveJobToStudent(student, jobName) {
  alert(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  );

  student.job = jobName;
  return student;
}
giveJobToStudent(student, 'веб-разработчик');
console.log(student);
