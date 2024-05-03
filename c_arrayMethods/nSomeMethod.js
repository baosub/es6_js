//Verifica si al menos un elemento cumple la funcion

const numbers = [1, 2, 3, 4, 5];
const hasLargeNumbers = numbers.some(x => x > 3); // true

console.log(hasLargeNumbers);