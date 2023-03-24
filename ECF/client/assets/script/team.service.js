import { Team } from "./team.class.js";

export class TeamService {
  constructor() {

  }

  /**
   * Récupère l'ensemble des données et les ajoutent dans le DOM
   * @param {DOM} target - localisation dans le dom
   * @return {Array<Team>}
   */
  getAll(target) {
    let myHeaders = new Headers();
    let url = '/team';
    let options = {
      method: 'GET',
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        response.forEach(elt => {
          let myTeam = document.createElement('tr');

          let myLogo = document.createElement('img');
          myLogo.src = elt.logo;

          let myName = document.createElement('td');
          myName.innerText = elt.name;

          let myModif = document.createElement('td');
          let myIcone = document.createElement('i');
          myIcone.classList.add('fas','fa-light', 'fa-edit');
          let myLinkToDetails = document.createElement('a');
          myLinkToDetails.setAttribute('href', './pages/details.html#' + elt._id);
          myLinkToDetails.appendChild(myIcone);
          myModif.appendChild(myLinkToDetails);
          myModif.style.textAlign = 'center';

          let myDelete = document.createElement('td');
          let btnDelete = document.createElement('button');
          let myIcone2 = document.createElement('i');
          myIcone2.classList.add('fas', 'fa-light', 'fa-trash')
          btnDelete.classList.add('btn', 'btn-outline-danger');
          myDelete.style.textAlign = 'center';
          myDelete.appendChild(btnDelete);
          btnDelete.appendChild(myIcone2);
          btnDelete.addEventListener('click', () => {
            this.remove(elt._id);
          });

          target.appendChild(myTeam);
          myTeam.appendChild(myLogo);
          myTeam.appendChild(myName);
          myTeam.appendChild(myModif);
          myTeam.appendChild(myDelete);
        });
        return response;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
    }
    
    /**
     * Renvoie la Team correspondant à l'identifiant
     * @param {String} id - _id de la team concerné
     * @return {Team}
    */
   get(id) {
     let myHeaders = new Headers();
     let url = '/team/' + id;
     let options = {
       method: 'GET',
       headers: myHeaders
      };
      
      return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((resource) => {
        let tmp = new Team(resource._id, resource.name, resource.code, resource.country);
        return tmp;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Modifie la team passé en paramètre
   * @param {String} team 
   */
  modif(team) {
    let url = '/team/' + team._id;
    let options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(team)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('reussi')
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Ajoute une nouvelle team à la collection
   * @param {Team} team 
   */
  add(team) {
    let url = '/team';
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(team)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('reussi');
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Suppression d'une team d'identifiant id
   * @param {String} id - identifiant de la team
   */
  remove(id) {
    let url = '/team/' + id;
    let myHeaders = new Headers();
    let options = {
      method : 'DELETE', 
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('Réussi');
          location.reload();
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }
}