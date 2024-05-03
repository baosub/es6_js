const grades = [87, 94, 68, 100, 83, 78, 99];
const maxGrade = grades.reduce((max, current) => Math.max(max, current), grades[0]);
console.log(maxGrade); // Salida: 100
