const ps = require('prompt-sync')();

const prixFabrication = parseFloat(ps("Prix de fabrication : "));
const prixVente = parseFloat(ps("Prix de vente : "));

if(prixFabrication > prixVente){
    console.log('Perte')
} else {
    console.log('Profit')
}