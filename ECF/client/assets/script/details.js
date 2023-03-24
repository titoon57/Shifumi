import { TeamService } from './team.service.js';
import { Team } from './team.class.js';

let name = document.querySelector('#name');
let code = document.querySelector('#code');
let country = document.querySelector('#country');
let title = document.querySelector('#title');

// /details/#465sd4gf65dfs4gdfs5g4
// hash => #465sd4gf65dfs4gdfs5g4
// après substring(1) => 465sd4gf65dfs4gdfs5g4
let myId = window.location.hash.substring(1);

let T = new TeamService();
let myTeam = T.get(myId);
myTeam.then((elt) => {
  title.innerText = elt.name;
  name.value = elt.name;
  code.value = elt.code;
  country.value = elt.country;
  /* ------------------------------------------ */
  // la Team doit être chargé pour que je la modifie !
  let modif = document.querySelector('#modif');
  modif.addEventListener('click', () => {
    let tmp = new Team(elt._id, name.value, code.value, country.value);
    T.modif(tmp);
  });
});