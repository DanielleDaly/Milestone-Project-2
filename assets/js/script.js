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

// Game Variables
let playerChoice = "";
let computerChoice = "";
const possibleComputerChoices = ["rock", "paper", "scissors", "lizard", "spock"];
let currentRoundWinner = "";
let currentRoundWinnerMessage = "";
let playerScore = 0;
let computerScore = 0;


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "reset-button" || this.getAttribute("id") === "play-again-button") {
                resetGame();
            } else {
                let option = this.getAttribute("id");
                makeChoices(option);
            }
        });
    }
});

function playGame() {}

function makeChoices(option) {
    playerChoice = option;
    playerChoiceImage.setAttribute('src', `assets/images/${playerChoice}.svg`);

    const randomChoice = Math.floor(Math.random() * 5);
    computerChoice = possibleComputerChoices[randomChoice];
    computerChoiceImage.setAttribute('src', `assets/images/${computerChoice}.svg`);

    checkRoundWinner(playerChoice, computerChoice);
}

function checkRoundWinner(playerChoice, computerChoice) {
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
        currentRoundWinnerMessage = "Rock Crushes Paper. Computer Wins!";
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

    if (currentRoundWinner === "computer") {
        incrementScoreComputer();
    } else if (currentRoundWinner === "player") {
        incrementScorePlayer();
    }

    checkGameWinner();

    winnerMessage.innerHTML = currentRoundWinnerMessage;
}

function incrementScorePlayer() {
    playerScore++;
    playerScoreNumber.innerHTML = playerScore;
}

function incrementScoreComputer() {
    computerScore++;
    computerScoreNumber.innerHTML = computerScore;
}

function checkGameWinner() {
    if (playerScore === 10) {
        winnerScreenMessage.innerHTML = "Congratulations! You are the Winner!";
        gameArea.style.display = "none";
        winnerScreen.style.display = "block";
    } else if (computerScore === 10) {
        winnerScreenMessage.innerHTML = "Unlucky! Computer Wins!";
        gameArea.style.display = "none";
        winnerScreen.style.display = "block";
    }
}

function resetGame() {
    playerChoice = "";
    computerChoice = "";
    currentRoundWinner = "";
    currentRoundWinnerMessage = "";
    playerScore = 0;
    computerScore = 0;

    playerScoreNumber.innerHTML = playerScore;
    computerScoreNumber.innerHTML = computerScore;
    winnerMessage.innerHTML = "";
    winnerExplanation.innerHTML = "";
    playerChoiceImage.innerHTML = "";
    computerChoiceImage.innerHTML = "";

    playerChoiceImage.setAttribute('src', `assets/images/default-image.png`);
    computerChoiceImage.setAttribute('src', `assets/images/default-image.png`);

    gameArea.style.display = "block";
    winnerScreen.style.display = "none";
}
