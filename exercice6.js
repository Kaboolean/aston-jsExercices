const ps = require('prompt-sync')();

let nombre = parseInt(ps("Entrez un nombre :"));

if (nombre % 2 === 0) {
    console.log("Pair");
} else {
    console.log("Impair");
}