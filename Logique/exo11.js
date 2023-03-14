function getNumberInLetters() {
    const input = prompt("Entrez un nombre entre 0 et 5 :");
    const number = parseInt(input);
  
    if (isNaN(number) || number < 0 || number > 5) {
      console.log("La saisie est erronée !");
    } else {
      const numbersInLetters = ["zéro", "un", "deux", "trois", "quatre", "cinq"];
      console.log(`Le nombre saisi est ${numbersInLetters[number]}.`);
    }
  }
  
  getNumberInLetters();