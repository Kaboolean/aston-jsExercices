const ps = require('prompt-sync')();

let nombre = parseInt(ps("Entrez un nombre :"));

if (nombre > 0) {
    console.log("Positif");
} else if (nombre < 0) {
    console.log("Négatif");
} else {
    console.log("Nul");
}