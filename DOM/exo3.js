const maDiv2 = document.getElementById("maDiv2");

// Créer une liste ul et l'ajouter à la div
const maListe = document.createElement("ul");
maDiv2.appendChild(maListe);

let lien = "";
while (lien !== "fin") {
    // Demander à l'utilisateur la saisie d'une adresse Internet
    lien = prompt("Entrez un lien Internet (ou tapez 'fin' pour arrêter) :");

    if (lien !== "fin") {
        // Créer un élément li
        const li = document.createElement("li");

        // Créer un élément a
        const a = document.createElement("a");

        // Modifier l'attribut href de l'élément a
        a.href = lien;

        // Ajouter le lien à l'élément a
        a.innerHTML = lien;

        // Ajouter l'élément a à l'élément li
        li.appendChild(a);

        // Ajouter l'élément li à la liste
        maListe.appendChild(li);
    }
}