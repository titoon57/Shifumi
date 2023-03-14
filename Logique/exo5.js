function estPremier(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let compteur = 0;
  let somme = 0;
  let nombre = 2;
  
  while (compteur < 100) {
    if (estPremier(nombre)) {
      console.log(nombre);
      somme += nombre;
      compteur++;
    }
    nombre++;
  }
  
  console.log("La somme des nombres premiers est : " + somme);