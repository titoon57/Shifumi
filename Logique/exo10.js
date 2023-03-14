function anneeBissextile(annee) {
    if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  const input = prompt("Entrez une année pour savoir si elle est bissextile :");
  const annee = parseInt(input);
  
  if (!isNaN(annee)) {
    if (anneeBissextile(annee)) {
      console.log(`${annee} est une année bissextile.`);
    } else {
      console.log(`${annee} n'est pas une année bissextile.`);
    }
  } else {
    console.log("Vous devez entrer une année valide !");
  }