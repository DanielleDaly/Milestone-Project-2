// On Screen Elements
const playerScoreNumber = document.getElementById("player-score-number");
const computerScoreNumber = document.getElementById("computer-score-number");
const winnerMessage = document.getElementById("winner-message");
const winnerExplanation = document.getElementById("winner-explanation");
const winner = document.getElementById("winner");
const playerChoiceImage = document.getElementById("your-choice-image");
const computerChoiceImage = document.getElementById("computer-choice-image");

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
            if (this.getAttribute("id") === "reset-button") {
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


    checkWinner(playerChoice, computerChoice);
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        currentRoundWinner = "draw";
        currentRoundWinnerMessage = "Tie. You're both losers!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Paper covers Rock. Computer Wins!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Rock crushes Scissors. You Win!";
    } else if (playerChoice === "rock" && computerChoice === "lizard") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Rock crushes Lizard. You Win!";
    } else if (playerChoice === "rock" && computerChoice === "spock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Spock vaporizes Rock. Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Paper covers Rock. You Win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Scissors cuts Paper. Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice === "lizard") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Lizard eats Paper. Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice === "spock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Paper disproves Spock. You Win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Rock crushes Paper. Computer Wins!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Scissors cuts Paper. You Win!";
    } else if (playerChoice === "scissors" && computerChoice === "lizard") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Scissors decapitates Lizard. You Win!";
    } else if (playerChoice === "scissors" && computerChoice === "spock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Spock smashes Scissors. Computer Wins!";
    } else if (playerChoice === "lizard" && computerChoice === "rock") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Rock crushes Lizard. Computer Wins!";
    } else if (playerChoice === "lizard" && computerChoice === "paper") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Lizard eats Paper. You Win!";
    } else if (playerChoice === "lizard" && computerChoice === "scissors") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Scissors decapitates Lizard. Computer Wins!";
    } else if (playerChoice === "lizard" && computerChoice === "spock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Lizard poisons Spock. You Win!";
    } else if (playerChoice === "spock" && computerChoice === "rock") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Spock vaporizes Rock. You Win!";
    } else if (playerChoice === "spock" && computerChoice === "paper") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Paper disproves Spock. Computer Wins!";
    } else if (playerChoice === "spock" && computerChoice === "scissors") {
        currentRoundWinner = "player";
        currentRoundWinnerMessage = "Spock crushes Scissors. You Win!";
    } else if (playerChoice === "spock" && computerChoice === "lizard") {
        currentRoundWinner = "computer";
        currentRoundWinnerMessage = "Lizard poisons Spock. Computer Wins!";
    }

    if (currentRoundWinner == "computer") {
        incrementScoreComputer();
    } else if (currentRoundWinner == "player") {
        incrementScorePlayer();
    }

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

function setWinner() {}

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

}
