// JavaScript code for the dice rolling game

// Function to roll the dice and update the images
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
  
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImageSource);
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
    updateResult(randomNumber1, randomNumber2);
  }
  
  // Function to update the result text
  function updateResult(number1, number2) {
    var resultElement = document.querySelector("h1");
    if (number1 > number2) {
      resultElement.innerHTML = "Player 1 Wins!";
    } else if (number2 > number1) {
      resultElement.innerHTML = "Player 2 Wins!";
    } else {
      resultElement.innerHTML = "Roll It Once Again";
    }
  }
  
  // Get the "Play Again" button element
  var playAgainButton = document.querySelector(".button");
  
  // Add a click event listener to the "Play Again" button
  playAgainButton.addEventListener("click", rollDice);
  
  // Initial roll when the page loads
  rollDice();
