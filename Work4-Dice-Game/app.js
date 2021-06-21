function checkRefresh() {
  if (!sessionStorage.getItem("zarAt")) {
    sessionStorage.setItem("zarAt", "extra");
  } else{
    rollTheDice();
  }
}

function rollTheDice(){

var allDice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

//            First Dicee
var randomNumber1 = Math.floor(Math.random()*6);
var firstDice = allDice[randomNumber1];
document.querySelector(".img1").setAttribute("src", firstDice);

//            Second Dicee
var randomNumber2 = Math.floor(Math.random()*6);
var secondDice = allDice[randomNumber2];

document.querySelector(".img2").setAttribute("src", secondDice);

    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
      }
    else if(randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
      }

  }

  document.querySelector("body").onload = checkRefresh();
