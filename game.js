window.addEventListener("load", () => {
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const result = document.getElementById("result");

  rockButton.addEventListener("click", function() {
    playGame("rock");
  });

  paperButton.addEventListener("click", function() {
    playGame("paper");
  });

  scissorsButton.addEventListener("click", function() {
    playGame("scissors");
  });

  function random() {
    return Math.random();
  }

  function playGame(userChoice) {
    let computerChoice = "";

    if (random() < 0.34) {
      computerChoice = "rock";
    } else if (random() <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    let message = "";
    if (userChoice === computerChoice) {
      message = "Egalite !";
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        message = "Vous avez gagne ! La pierre bat les ciseaux.";
      } else {
        message = "Vous avez perdu ! Le papier bat la pierre.";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        message = "Vous avez gagne ! Le papier bat la pierre.";
      } else {
        message = "Vous avez perdu ! Les ciseaux battent le papier.";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        message = "Vous avez gagne ! Les ciseaux battent le papier.";
      } else {
        message = "Vous avez perdu ! La pierre bat les ciseaux.";
      }
    }

    result.textContent = message;
  }
});