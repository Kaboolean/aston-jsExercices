const ps = require('prompt-sync')();

const userName = ps("Quel est votre nom? ");
console.log(`Bonjour ${userName} !`);