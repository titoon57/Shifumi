let voiture = {
    marque: 'Volkswagen',
    modele: 'Golf',
    abs: true,
    finition: {
        couleur: 'grise',
        option: 'aucune',
        chromes: ['poignées de portes', 'calandre']
    },
    kilometrage: 150000
};

console.log("Marque : " + voiture.marque);
console.log("Couleur de finition : " + voiture.finition.couleur);
console.log("Kilométrage : " + voiture.kilometrage);
console.log("ABS : " + voiture.abs);
console.log("Deuxième option chromée : " + voiture.finition.chromes[1]);