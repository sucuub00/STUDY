//Решение 1

// function sum(...number) {
//   let empty = 0;
//   for (let i = 0; i < number.length; i++) {
//     empty += number[i];
//   }
//   return empty;
// }

// // console.log(sum(1, 2, 3));
// console.log(sum(10, 15, 249, 653, 846));
// // let i = [1, 2, 3]

//Решение 2

function sum(...number) {
  return number.reduce((acc, item) => (acc += item), 0);
}

console.log(sum(1, 2, 3));
