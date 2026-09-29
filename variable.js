// Variables y tipos de datos

const nombre = "Eyersson";
const añoNacimiento = 2008;

const añoActual = new Date().getFullYear();
const edad = añoActual - añoNacimiento;

console.log("===== DATOS DEL ESTUDIANTE =====");
console.log("Nombre: " + nombre);
console.log("Año de nacimiento: " + añoNacimiento);
console.log("Año actual: " + añoActual);
console.log("Edad actual: " + edad);

// Operaciones matemáticas

let suma = 10 + 5;
let resta = 20 - 8;
let multiplicacion = 4 * 5;
let division = 50 / 2;
let residuo = 10 % 3;

console.log("===== OPERACIONES =====");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Residuo: " + residuo);