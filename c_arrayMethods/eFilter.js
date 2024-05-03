//Filtra los nums generando un nuevo array

const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter(function (number) {
    return number > 10;
});
console.log(filtered);  // Salida: [12, 130, 44]

//tambien puede ser escrita con funcion flecha:s

//const filtered = numbers.filter(number => number > 10);
//console.log(filtered);  // Salida: [12, 130, 44]
