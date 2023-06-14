const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Николай' },
  { id: 3, name: 'Ангелина' },
  { id: 4, name: 'Виталий' },
];

// РЕШЕНИЕ 1

function giveTalonsInOrder(patients, orders) {
  return patients.sort((a, b) => {
    return orders.indexOf(a.id) - orders.indexOf(b.id);
  });
}

console.log(giveTalonsInOrder(people, ordersArr));

// РЕШЕНИЕ 2

// function giveTalonsInOrder(patients, orders) {
//   const newArray = [];

//   patients.forEach((patient) => {
//     const index = orders.findIndex((item) => {
//       return item === patient.id;
//     });

//     newArray[index] = patient;
//   });

//   return newArray;
// }

// console.log(giveTalonsInOrder(people, ordersArr));
