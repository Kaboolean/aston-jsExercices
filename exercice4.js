const ps = require('prompt-sync')();

const childAge = Number(ps("Entrez l'âge de l'enfant : "));

if(childAge >= 12){
    console.log('Cadet');
}else if (childAge >= 10 ){
    console.log('Minime');
}else if (childAge >= 8 ){
    console.log('Pupille');
}else{
    console.log("Poussin")
}