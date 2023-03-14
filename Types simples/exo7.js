let SF = ["Star Trek", "Timeless", "Another Life", "Love Death & Robots"];
let Comedie = ["How I Met Your Mother", "The Big Bang Theory", "Norsemen", "Archer"];
let Anime = ["Rick & Morty", "Boruto", "Tokyo Ghoul", "Death Note"];

let netflix = [SF, Comedie, Anime];

SF.splice(2, 0, "Star Wars", "Armageddon");

Comedie.splice(2, 1, "Marié 2 enfants", "Notre belle famille");

SF.push("Dune");

Anime.unshift("L'attaque des titans");

Anime.pop();

console.log(netflix);