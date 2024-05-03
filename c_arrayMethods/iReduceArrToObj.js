const people = ['Alice', 'Bob', 'Tina'];
const peopleObj = people.reduce((acc, person, index) => {
  acc[index] = person;
  return acc;
}, {});
console.log(peopleObj); // Salida: {0: "Alice", 1: "Bob", 2: "Tina"}
