const buttonNewGame = document.getElementById("newGame");
const buttonOfRollDice = document.querySelector(".buttonOfRollDice");
const numbersOfCurrentOne = document.querySelector(".numbersOfCurrentOne");
const numbersOfCurrentTwo = document.querySelector(".numbersOfCurrentTwo");
const scorePlayerOne = document.querySelector(".scorePlayerOne");
const scorePlayerTwo = document.querySelector(".scorePlayerTwo");
const dice = document.querySelector("#dice");
let isPlayerOne;

document.addEventListener("DOMContentLoaded", initializeGame);

function initializeGame() {
  scorePlayerOne.innerText = 0;
  scorePlayerTwo.innerText = 0;
  totalPlayerOne = 0;
  totalPlayerTwo = 0;
  dice.src = "images/dice6" + ".png";
  isPlayerOne = true;
}

function ROUND() {
  // 1. Créer un nombre aléatoire pour les dés
  let numberOfDice = Math.floor(Math.random() * 6 + 1);

  // 2. Afficher le résultat
  dice.src = "images/dice" + numberOfDice + ".png";
  console.log(numberOfDice);

  // 3.
  if (numberOfDice === 1) {
    // Si le dé tombe sur 1, réinitialiser le score du joueur actuel
    isPlayerOne ? (totalPlayerOne = 0) : (totalPlayerTwo = 0);
    isPlayerOne = !isPlayerOne;
  } else {
    // Si le dé ne tombe pas sur 1, ajouter la valeur du dé au score du joueur actuel
    isPlayerOne
      ? (totalPlayerOne += numberOfDice)
      : (totalPlayerTwo += numberOfDice);
  }
  // Mise à jour de l'affichage des scores sur la page web
  scorePlayerOne.innerHTML = totalPlayerOne;
  scorePlayerTwo.innerHTML = totalPlayerTwo;
}

function GLOBAL() {}

buttonNewGame.addEventListener("click", initializeGame);
buttonOfRollDice.addEventListener("click", ROUND);
