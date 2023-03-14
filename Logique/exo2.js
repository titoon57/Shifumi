let anneeNaissance = prompt("Quelle est votre année de naissance ?");
let anneeCourante = new Date().getFullYear();
let age = anneeCourante - anneeNaissance;

let prixTicket = 90;

if (age < 12) {
    prixTicket = 0;
} else if (age >= 12 && age < 18) {
    prixTicket /= 2;
} else if (age >= 70) {
    prixTicket *= 0.7;
}

console.log(`Vous avez ${age} ans et votre billet coûte ${prixTicket}€.`);