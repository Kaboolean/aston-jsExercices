const ps = require('prompt-sync')();

let nombre = parseInt(ps("Entrez un nombre pour afficher sa table de multiplication :"));

for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}