let playerList = {};

function guessingGame() {
  let playerName = prompt(
    "Welcome to the Guessing Game! Are you ready to play? If so, type your name below to get started!"
  );

  let randomNum = prompt(playerName + ", Guess a number between 0 and 100");
  const actualNum = 34;
  let guessCounter = 1;
  let storedGuess = [];

  while (randomNum != actualNum) {
    if (randomNum < 0 || randomNum > 100) {
      storedGuess.push(randomNum);
      guessCounter++;
      randomNum = prompt("Guess within the range of 0 and 100");
    } else if (randomNum < actualNum) {
      storedGuess.push(randomNum);
      guessCounter++;
      randomNum = prompt(`${playerName} guess higher. Try again.`);
    } else if (randomNum > actualNum) {
      storedGuess.push(randomNum);
      guessCounter++;
      randomNum = prompt(`${playerName} guess lower. Try again.`);
    }
  }
  storedGuess.push(randomNum);
  storedGuess = storedGuess.join(", ");

  if (!playerList[playerName]) {
    playerList[playerName] = guessCounter;
    alert(
      ` Congratulations,
            ${playerName} 
            ! You guessed the right number in ${guessCounter} attempts. Your previous guesses were
            ${storedGuess}.`
    );
  } else if (playerList[playerName] > guessCounter) {
    playerList[playerName] = guessCounter;
    alert(
      `Congratulations ${playerList[playerName]}! You got a new high score with ${guessCounter} attempts!`
    );
  } else {
    alert(
      `Sorry, ${playerName} You didnt beat your best score. Try again if you wish, PEASANT!`
    );
  }

  playAgain();
}

function playAgain() {
  let response = prompt("Do you want to play again? If so, type yes");
  if (response.toLowerCase() === "yes") {
    guessingGame();
  } else {
    return alert("Thanks for playing! Come back soon.");
  }
}

guessingGame();
