import { TeamService } from "./team.service.js";
import { Team } from "./team.class.js";

let btnNew = document.querySelector('#newteam');
let T = new TeamService();

btnNew.addEventListener('click', () => {
  let name = document.querySelector('#name');
  let code = document.querySelector('#code');
  let country = document.querySelector('#country');

  let newTeam = new Team('', name.value, code.value, country.value);
  
  let promise = T.add(newTeam);
  promise.then(() => {
    name.value = '';
    code.value = '';
    country.value = '';
  });
});