// Demander le nombre d'étages de la pyramide à l'utilisateur
let nbEtages = prompt("Entrez le nombre d'étages de la pyramide :");
nbEtages = parseInt(nbEtages);

// Demander la couleur du texte de la première moitié à l'utilisateur
let colorTop = prompt("Entrez la couleur du texte pour la première moitié du losange :");

// Demander la couleur du texte de la seconde moitié à l'utilisateur
let colorBottom = prompt("Entrez la couleur du texte pour la seconde moitié du losange :");

// Créer dynamiquement les éléments HTML pour afficher le losange
let losange = document.createElement("div");
losange.style.display = "inline-block";

// Boucle pour créer les étages supérieurs du losange
for (let i = 1; i <= nbEtages; i++) {
  let etage = document.createElement("div");
  etage.style.width = (i * 2 - 1) + "em";
  etage.style.height = "1em";
  etage.style.textAlign = "center";
  etage.style.color = (i <= Math.ceil(nbEtages / 2)) ? colorTop : colorBottom;
  etage.textContent = "1".repeat(i * 2 - 1);
  losange.appendChild(etage);
  losange.appendChild(document.createElement("br"));
}

// Boucle pour créer les étages inférieurs du losange
for (let i = nbEtages - 1; i >= 1; i--) {
  let etage = document.createElement("div");
  etage.style.width = (i * 2 - 1) + "em";
  etage.style.height = "1em";
  etage.style.textAlign = "center";
  etage.style.color = (i <= Math.ceil(nbEtages / 2)) ? colorTop : colorBottom;
  etage.textContent = "1".repeat(i * 2 - 1);
  losange.appendChild(etage);
  losange.appendChild(document.createElement("br"));
}

document.body.appendChild(losange);