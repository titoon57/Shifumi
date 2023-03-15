const maDiv = document.getElementById("maDiv");

const couleurFond = prompt("Entrez une couleur en Hexadécimal pour le fond :");
const couleurTexte = prompt("Entrez une couleur en Hexadécimal pour le texte :");

const texte = prompt("Entrez le texte à afficher :");

maDiv.style.height = "400px";
maDiv.style.width = "800px";
maDiv.style.backgroundColor = "#" + couleurFond;
maDiv.style.color = "#" + couleurTexte;
maDiv.style.textAlign = "center";

maDiv.innerHTML = texte;