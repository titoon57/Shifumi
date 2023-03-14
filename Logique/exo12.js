function jetDeDes(nbJets) {
    const resultat = [];
  
    for (let i = 0; i < nbJets; i++) {
      const valeurDe = Math.floor(Math.random() * 6) + 1;
      resultat.push(valeurDe);
    }
  
    return resultat;
  }
  
  let nbJets = 3;
  let totalJets = 0;
  
  while (true) {
    const resultat = jetDeDes(nbJets);
    totalJets += 1;
  
    console.log(`Résultats du jet de ${nbJets} dé(s) : ${resultat.join(", ")}`);
  
    if (resultat.includes(4) && resultat.includes(2) && resultat.includes(1)) {
      console.log(`Félicitations, vous avez obtenu 4, 2 et 1 en ${totalJets} jet(s) !`);
      break;
    }
  
    nbJets = Math.max(0, nbJets - 1);
  }