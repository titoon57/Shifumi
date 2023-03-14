let poids = parseFloat(prompt("Entrez votre poids (en kg) :"));
let taille = parseFloat(prompt("Entrez votre taille (en mètre) :"));

let imc = poids / (taille * taille);

console.log("Votre IMC est de : " + imc.toFixed(2));