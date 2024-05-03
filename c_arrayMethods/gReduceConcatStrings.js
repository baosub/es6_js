const words = ["Hello", "world", "with", "reduce"];
const sentence = words.reduce((acc, current) => acc + ' ' + current);
console.log(sentence); // Salida: "Hello world with reduce"
