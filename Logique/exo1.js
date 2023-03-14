let dateNaissance = prompt("Quelle est votre année de naissance ?");
let anneeCourante = new Date().getFullYear();
let age = anneeCourante - dateNaissance;

if (age >= 18) {
  console.log("Vous êtes majeur.");
} else if (age < 18) {
  console.log("Vous êtes mineur.");
} else {
    console.log("Date de naissance invalide")
}

console.log(`Vous avez ${age} ans.`);