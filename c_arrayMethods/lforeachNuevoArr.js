let numeros = [1, 2, 3, 4, 5];
let cuadrados = [];
numeros.forEach(function(numero) {
    cuadrados.push(numero * numero);
});
console.log(cuadrados);  // Muestra [1, 4, 9, 16, 25]
