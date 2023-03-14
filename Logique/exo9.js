function tableDeMultiplication(n) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
  
  const input = prompt("Entrez un nombre pour afficher sa table de multiplication :");
  const nombre = parseInt(input);
  
  if (!isNaN(nombre)) {
    tableDeMultiplication(nombre);
  } else {
    console.log("Vous devez entrer un nombre valide !");
  }