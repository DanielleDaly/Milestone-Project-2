// On Screen Elements
const playerScoreNumber = document.getElementById("player-score-number");
const computerScoreNumber = document.getElementById("computer-score-number");
const winnerMessage = document.getElementById("winner-message");
const winnerExplanation = document.getElementById("winner-explanation");
const winner = document.getElementById("winner");
const playerChoiceImage = document.getElementById("your-choice-image");
const computerChoiceImage = document.getElementById("computer-choice-image");
const winnerScreenMessage = document.getElementById("winner-screen-message");
const winnerScreen = document.getElementById("winner-screen");
const gameArea = document.getElementById("game-area");
const gameRules = document.getElementById("game-rules");

// Game Variables
const possibleComputerChoices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerChoice = "";
let computerChoice = "";
let currentRoundWinner = "";
let currentRoundWinnerMessage = "";
let playerScore = 0;
let computerScore = 0;

//Wait for the DOM to finish loading before adding event listeners
//Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    // Loop through the buttons
    for (let button of buttons) {
        // Add a click listener to the button
        button.addEventListener("click", function() {
            // If it is the "Reset Game" or "Play Again" button
            if (this.getAttribute("id") === "reset-button" || this.getAttribute("id") === "play-again-button") {
                // Call the resetGame function
                resetGame();
            } else {
                // Otherwise get the chosen option from the button ID
                let option = this.getAttribute("id");
                // Otherwise get the chosen option from the button ID
                makeChoices(option);
            }
        });
    }
});

/**
 * makeChoices
 * Sets the user's choice and randomly generates a choice for the computer player
 * @param {string} option - The users chosen option
 */
function makeChoices(option) {
    // Set the playerChoice and display the relevant image for the playerChoiceImage element
    playerChoice = option;
    playerChoiceImage.setAttribute('src', `assets/images/${playerChoice}.svg`);

    // Pick a random number between 0 and 4
    const randomChoice = Math.floor(Math.random() * 5);
    // Use the random number to get a choice from the array of possible choices
    computerChoice = possibleComputerChoices[randomChoice];
    // Set the computerChoiceImage to be the appropriate image
    computerChoiceImage.setAttribute('src', `assets/images/${computerChoice}.svg`);

    // Call the checkRoundWinner function passing the player and computer choices as parameters
    checkRoundWinner(playerChoice, computerChoice);
}

/**
 * checkRoundWinner
 * Checks the choices made by the user and computer and determines which is the winner of the round
 * Calls the function to increment the user's / computer's score depending on who won
 * Calls the checkGameWinner function to see if the game has been won
 * Sets the contents of the on-screen winner message
 * @param {*} playerChoice - The user's choice
 * @param {*} computerChoice  - The computer's choice
 */
function checkRoundWinner(playerChoice, computerChoice) {
    // If both selected the same option, the round is a draw
    // Otherwise the winner should be determined based on the game rules
    if (playerChoice === computerChoice) {
        currentRoundWinner = "draw";
        currentRoundWinnerMessage = "Tie. You're both losers!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Paper Covers Rock. Computer Wins!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Rock Crushes Scissors. You Win!";
    } else if (playerChoice === "rock" && computerChoice === "lizard") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Rock Crushes Lizard. You Win!";
    } else if (playerChoice === "rock" && computerChoice === "spock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Spock Vaporizes Rock. Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Paper Covers Rock. You Win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Scissors Cuts Paper. Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice === "lizard") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Lizard Eats Paper. Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice === "spock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Paper Disproves Spock. You Win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Rock Crushes Scissors. Computer Wins!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Scissors Cuts Paper. You Win!";
    } else if (playerChoice === "scissors" && computerChoice === "lizard") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Scissors Decapitates Lizard. You Win!";
    } else if (playerChoice === "scissors" && computerChoice === "spock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Spock Smashes Scissors. Computer Wins!";
    } else if (playerChoice === "lizard" && computerChoice === "rock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Rock Crushes Lizard. Computer Wins!";
    } else if (playerChoice === "lizard" && computerChoice === "paper") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Lizard Eats Paper. You Win!";
    } else if (playerChoice === "lizard" && computerChoice === "scissors") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Scissors Decapitates Lizard. Computer Wins!";
    } else if (playerChoice === "lizard" && computerChoice === "spock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Lizard Poisons Spock. You Win!";
    } else if (playerChoice === "spock" && computerChoice === "rock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Spock Vaporizes Rock. You Win!";
    } else if (playerChoice === "spock" && computerChoice === "paper") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Paper Disproves Spock. Computer Wins!";
    } else if (playerChoice === "spock" && computerChoice === "scissors") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Spock Crushes Scissors. You Win!";
    } else if (playerChoice === "spock" && computerChoice === "lizard") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Lizard Poisons Spock. Computer Wins!";
    }

    // Increment the score of the round winner
    if (currentRoundWinner === "computer") {
        incrementScoreComputer();
    } else if (currentRoundWinner === "player") {
        incrementScorePlayer();
    }

    // Check if the game has reached it's conclusion
    checkGameWinner();

    // Update the on-screen winner message
    winnerMessage.innerHTML = currentRoundWinnerMessage;
}

/**
 * incrementScorePlayer
 * Increments the user's score and sets the on-screen user score number with the updated score
 */
function incrementScorePlayer() {
     // Increment user's score
    playerScore++;
    // Set the on-screen user's score
    playerScoreNumber.innerHTML = playerScore;
}

/**
 * incrementScoreComputer
 * Increments the computer's score and sets the on-screen computer score number with the updated score
 */
function incrementScoreComputer() {
     // Increment computer's score
    computerScore++;
    // Set the on-screen computer player's score
    computerScoreNumber.innerHTML = computerScore;
}

/**
 * checkGameWinner
 * Determine if the user / computer has won 10 rounds
 * Set the on-screen message on the winner screen
 * Hide the game area and game rules panel
 * Display the winner screen
 */
function checkGameWinner() {
    // Check if the user / computer have won 10 rounds
    if (playerScore === 10) {
        // Set the winner message on the winner screen to the appropriate message
        winnerScreenMessage.innerHTML = "Congratulations! You are the Winner!";
        // Hide the game area and rules panel
        gameArea.style.display = "none";
        gameRules.style.display = "none";
        // Display the Winner screen
        winnerScreen.style.display = "block";
    } else if (computerScore === 10) {
        // Set the winner message on the winner screen to the appropriate message
        winnerScreenMessage.innerHTML = "Unlucky! Computer Wins!";
        // Hide the game area and rules panel
        gameArea.style.display = "none";
        gameRules.style.display ="none";
        // Display the Winner screen
        winnerScreen.style.display = "block";
    }
}

/**
 * resetGame
 * Reset variables to their default values
 * Reset the on-screen messaging and game variables
 * Reset the chosen option images to the default "?" image
 * Display the Game Area and Rules Panel
 * Hide the Winner Screen
 */
function resetGame() {
    // Reset the game variables
    playerChoice = "";
    computerChoice = "";
    currentRoundWinner = "";
    currentRoundWinnerMessage = "";
    playerScore = 0;
    computerScore = 0;

    // Reset the on-screen messaging and game variables
    playerScoreNumber.innerHTML = playerScore;
    computerScoreNumber.innerHTML = computerScore;
    winnerMessage.innerHTML = "Make your choice below... or scroll down for Rules";
    playerChoiceImage.innerHTML = "";
    computerChoiceImage.innerHTML = "";

    // Reset the chosen option images to the default "?" image
    playerChoiceImage.setAttribute('src', `assets/images/default-image.png`);
    computerChoiceImage.setAttribute('src', `assets/images/default-image.png`);

    // Display the Game Area and Rules Panel
    gameArea.style.display = "block";
    gameRules.style.display = "block";
    // Hide the Winner Screen
    winnerScreen.style.display = "none";

}
