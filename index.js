var randomDiceSelector1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "img/dice" + randomDiceSelector1 + ".png"; // dice1.png - dice6.png;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage1);


var randomDiceSelector2 = (Math.floor(Math.random() * 6) + 1);
var diceImage2 = "img/dice" + randomDiceSelector2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2);


if (randomDiceSelector1 === randomDiceSelector2) {
  document.querySelector("h1").innerHTML="👀 That's a Draw 👀";
  document.querySelector("p").innerHTML="Nice! The chance of drawing is 1 in 36!🙈";
}

else if (randomDiceSelector1 > randomDiceSelector2) {
  document.querySelector("h1").innerHTML = "💯Player 1 Wins";
}

else if (randomDiceSelector1 < randomDiceSelector2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins✌🏻";
}
