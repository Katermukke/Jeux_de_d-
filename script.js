let isPlayerOne;
const jsConfetti = new JSConfetti();
const dice = document.querySelector("#dice");
const buttonNewGame = document.getElementById("newGame");
const buttonOfHold = document.querySelector(".buttonOfHold");
const scorePlayerOne = document.querySelector(".scorePlayerOne");
const scorePlayerTwo = document.querySelector(".scorePlayerTwo");
const buttonOfRollDice = document.querySelector(".buttonOfRollDice");
const diodePlayerOne = document.querySelector(".firstPlayer .diode");
const diodePlayerTwo = document.querySelector(".secondPlayer .diode");
const numbersOfCurrentOne = document.querySelector(".numbersOfCurrentOne");
const numbersOfCurrentTwo = document.querySelector(".numbersOfCurrentTwo");
const confetti = document.querySelector(".confetti-button");

document.addEventListener("DOMContentLoaded", initializeGame);

function initializeGame() {
  scorePlayerOne.innerText = 0;
  scorePlayerTwo.innerText = 0;
  numbersOfCurrentOne.innerText = 0;
  numbersOfCurrentTwo.innerText = 0;
  totalPlayerOne = 0;
  totalPlayerTwo = 0;
  globalPlayerOne = 0;
  globalPlayerTwo = 0;
  isPlayerOne = true;
  DIODE();
}

function ROUND() {
  // 1. Créer un nombre aléatoire pour le dé
  let numberOfDice = Math.floor(Math.random() * 6 + 1);
  // 2. Affiche le résultat du dé en image
  dice.src = "images/dice" + numberOfDice + ".png";
  // 3. Si le dé tombe sur 1
  if (numberOfDice === 1) {
    // 4. réinitialise le score du joueur actuel
    isPlayerOne ? (totalPlayerOne = 0) : (totalPlayerTwo = 0);
    isPlayerOne = !isPlayerOne;
  } else {
    // 5. sinon ajoute la valeur du dé au score du joueur actuel
    isPlayerOne
      ? (totalPlayerOne += numberOfDice)
      : (totalPlayerTwo += numberOfDice);
  }
  // 6. Mise à jour de l'affichage des scores sur la page web
  scorePlayerOne.innerHTML = totalPlayerOne;
  scorePlayerTwo.innerHTML = totalPlayerTwo;
  DIODE();
}

function GLOBAL() {
  if (isPlayerOne) {
    // 1. Ajoute des points du joueur 1 au score global et réinitialise les points du round
    globalPlayerOne += totalPlayerOne;
    totalPlayerOne = 0; // 2. Réinitialisation des points du round pour le joueur 1
    isPlayerOne = false;
  } else {
    // 3. Ajoute des points du joueur 2 au score global et réinitialiser les points du round
    globalPlayerTwo += totalPlayerTwo;
    totalPlayerTwo = 0; // 4. Réinitialisation des points du round pour le joueur 2
    isPlayerOne = true;
  }
  // 5. Mise à jour de l'affichage des scores globaux
  numbersOfCurrentOne.innerHTML = globalPlayerOne;
  numbersOfCurrentTwo.innerHTML = globalPlayerTwo;
  scorePlayerOne.innerHTML = totalPlayerOne;
  scorePlayerTwo.innerHTML = totalPlayerTwo;
  checkForWinner();
  DIODE();
}

function checkForWinner() {
  if (globalPlayerOne >= 100) {
    document.getElementById("winnerMessage").innerText = "Joueur 1 à gagné !";
    jsConfetti.addConfetti();
    initializeGame();
  } else if (globalPlayerTwo >= 100) {
    document.getElementById("winnerMessage").innerText = "Joueur 2 à gagné !";
    jsConfetti.addConfetti();
    initializeGame();
  }
}

function DIODE() {
  diodePlayerOne.classList.toggle("diode-active", isPlayerOne);
  diodePlayerTwo.classList.toggle("diode-active", !isPlayerOne);
}

buttonNewGame.addEventListener("click", initializeGame);
buttonOfRollDice.addEventListener("click", ROUND);
buttonOfHold.addEventListener("click", GLOBAL);
confetti.addEventListener("click", confetti);
