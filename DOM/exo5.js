let characters = [
    { name: "Amiral Akbar", online: true },
    { name: "Darth Vador", online: true },
    { name: "Luc Skywalker", online: false },
    { name: "Princesse Leia", online: false },
    { name: "Hann Solo", online: true },
    { name: "R2D2", online: false },
    { name: "C3PO", online: true },
    { name: "Chewbacca", online: false },
    { name: "Darth Sidious", online: true },
  ];
  
  let ul = document.createElement("ul");
  characters.forEach((character) => {
    let li = document.createElement("li");
    li.textContent = character.name;
    if (character.online) {
      li.style.backgroundColor = "green";
      li.style.color = "blue";
    } else {
      li.style.backgroundColor = "white";
      li.style.color = "red";
    }
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  
  function addCharacter() {
    let name = prompt("Entrez le nom du personnage :");
    let isOnline = confirm("Le personnage est-il en ligne ?");
    let li = document.createElement("li");
    li.textContent = name;
    if (isOnline) {
      li.style.backgroundColor = "green";
      li.style.color = "blue";
    } else {
      li.style.backgroundColor = "white";
      li.style.color = "red";
    }
    ul.appendChild(li);
    let response = prompt("Entrez 'fin' pour arrêter ou appuyez sur Entrée pour ajouter un autre personnage.");
    if (response !== "fin") {
      addCharacter();
    }
  }
  
  addCharacter();