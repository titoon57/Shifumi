var compteur = 10;

var compteurIntervalle = setInterval(function() {
  console.log(compteur);

  compteur--;

  if (compteur < 1) {
    clearInterval(compteurIntervalle);
    console.log("Décollage !");
  }
}, 1000);