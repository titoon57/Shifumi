let prixHorsTaxes = parseFloat(prompt("Entrez le prix hors taxes :"));
let prixTTC = prixHorsTaxes * 1.196 + 5;

console.log("Le prix TTC avec frais de port est de : " + prixTTC.toFixed(2) + " euros");