const nombre = parseInt(prompt("Entrez un nombre entier : "));

if (isNaN(nombre)) {
  console.log("Vous devez entrer un nombre entier !");
} else if (nombre < 0) {
  console.log("Le nombre doit être positif !");
} else {
  let i = 1;
  let factorielle = 1;
  while (i <= nombre) {
    factorielle *= i;
    i++;
  }

  console.log(`La factorielle de ${nombre} est ${factorielle}.`);
}