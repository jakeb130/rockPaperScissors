let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Randomly return either 'rock', 'paper', or 'scissors'.
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateResults(text) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = text;
}

function playRound(playerSelection, computerSelection) {
  let outcomes = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" },
  };

  // Capitalize the first letter of playerSelection and computerSelection
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const playerSelectionCapitalized = capitalize(playerSelection);
  const computerSelectionCapitalized = capitalize(computerSelection);

  // Report and update score
  if (playerSelection === computerSelection) {
    updateResults(
      `It's a tie! <br>Current score: Player - ${playerScore}, Computer - ${computerScore}`
    );
  } else if (outcomes[playerSelection].beats === computerSelection) {
    playerScore++;
    updateResults(
      `You win! ${playerSelectionCapitalized} beats ${computerSelection}.<br>Current score: Player - ${playerScore}, Computer - ${computerScore}`
    );
    endGame();
  } else {
    computerScore++;
    updateResults(
      `You lose! ${computerSelectionCapitalized} beats ${playerSelection}.<br>Current score: Player - ${playerScore}, Computer - ${computerScore}`
    );
    endGame();
  }

  // Adds a conditional to the playRound function that checks if playerScore or computerScore is 5, and if so, ends the game.
  if (playerScore === 5 || computerScore === 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}

endGame();

// Initial message; winning message; losing message; tie message
function endGame() {
  if (playerScore + computerScore === 0) {
    updateResults(
      `Click a button to make your selection and begin! <br>Current score: Player - ${playerScore}, Computer - ${computerScore}`
    );
  } else if (playerScore === 5) {
    updateResults(
      `You win the game! Final score: ${playerScore}-${computerScore}. <br>Refresh the page to restart the game.`
    );
  } else if (computerScore === 5) {
    updateResults(
      `You lose the game! Final score: ${playerScore}-${computerScore}. <br>Refresh the page to restart the game.`
    );
  }
}

// Attach the playRound function to the button click event
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
