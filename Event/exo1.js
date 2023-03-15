window.addEventListener("DOMContentLoaded", function() {
    let bouton = document.getElementById("clic");

    let compteur = 0;

    bouton.addEventListener("click", function() {
        compteur++;

        console.log("Nombre de clics : " + compteur);

        document.getElementById("compteur").textContent = compteur;
    });
});