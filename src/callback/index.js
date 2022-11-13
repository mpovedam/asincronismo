// Ej1
const sum = (num1, num2) => num1 + num2;
const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(2, 2, sum)); 

// Ej2
setTimeout(() => console.log('Hola JavaScript'), 5000);

// Ej3
const gretting = name => console.log(`Hola ${name}`);
setTimeout(gretting, 2000, 'Oscar');