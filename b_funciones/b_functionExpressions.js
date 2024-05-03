//Las funciones también pueden ser definidas mediante una expresión. Pueden ser anónimas o nombradas.

//Características:

//No son elevadas, deben ser definidas antes de ser utilizadas.
//Son comúnmente usadas cuando una función debe ser pasada como un argumento a otra función.


const multiplicar = function (a, b) {
    return a * b;
};
console.log(multiplicar(4, 3)); // 12

