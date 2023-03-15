window.addEventListener("DOMContentLoaded", function() {
    let nomInput = document.getElementById("nom");
    let prenomInput = document.getElementById("prenom");
    let dateInput = document.getElementById("date");

    let nomOutput = document.getElementById("nom-output");
    let prenomOutput = document.getElementById("prenom-output");
    let ageOutput = document.getElementById("age-output");

    let bouton = document.getElementById("envoyer");

    bouton.addEventListener("click", function() {
        let nom = nomInput.value;
        let prenom = prenomInput.value;
        let date = dateInput.value;

        let now = new Date();
        let birthdate = new Date(date);
        let age = now.getFullYear() - birthdate.getFullYear();
        if (now.getMonth() < birthdate.getMonth() || (now.getMonth() == birthdate.getMonth() && now.getDate() < birthdate.getDate())) {
            age--;
        }

        nomOutput.textContent = "Bienvenue, " + prenom + " " + nom + " !";
        prenomOutput.textContent = "";
        ageOutput.textContent = "Vous avez " + age + " ans.";

        nomInput.value = "";
        prenomInput.value = "";
        dateInput.value = "";
    });
});