


// Generating the random numbers
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

// Setting the image based on the random number
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Deciding the Winner
if (randomNumber1 > randomNumber2) {
  document.querySelector(".winState").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector(".winState").innerHTML = "It's a Draw! 🏳";
} else {
  document.querySelector(".winState").innerHTML = "Player 2 wins! 🚩";
}
