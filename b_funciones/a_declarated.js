//Tienen un alcance de bloque si están dentro de un bloque ({}).
//Son elevadas (hoisted), lo que significa que pueden ser llamadas antes de ser definidas en el código.

function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 3)); // 8
