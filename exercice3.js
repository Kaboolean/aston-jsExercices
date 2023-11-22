const ps = require('prompt-sync')();

const firstNumber = Number(ps("Premier nombre : "));
const secondNumber = Number(ps("Deuxième nombre : "));
console.log(firstNumber + secondNumber);