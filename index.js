var randomDiceSelector1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "img/dice" + randomDiceSelector1 + ".png"; // dice1.png - dice6.png;

var image1 = document.querySelectorAll("img")[2];
image1.setAttribute("src", diceImage1);


var randomDiceSelector2 = (Math.floor(Math.random() * 6) + 1);
var diceImage2 = "img/dice" + randomDiceSelector2 + ".png";

var image2 = document.querySelectorAll("img")[3];
image2.setAttribute("src", diceImage2);


if (randomDiceSelector1 === randomDiceSelector2) {
  document.querySelector("h1").innerHTML="It's a Draw"
}

else if (randomDiceSelector1 > randomDiceSelector2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (randomDiceSelector1 < randomDiceSelector2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
