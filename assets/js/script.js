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
let playerScore = 0;
let computerScore = 0;


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "reset-button") {
                alert("You clicked Play Again!");
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
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        currentRoundWinner = "player";
    } else if (playerChoice === "rock" && computerChoice === "lizard") {
        currentRoundWinner = "player";
    } else if (playerChoice === "rock" && computerChoice === "spock") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "paper" && computerChoice === "lizard") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "paper" && computerChoice === "spock") {
        currentRoundWinner = "player";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        currentRoundWinner = "player";
    } else if (playerChoice === "scissors" && computerChoice === "lizard") {
        currentRoundWinner = "player";
    } else if (playerChoice === "scissors" && computerChoice === "spock") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "lizard" && computerChoice === "rock") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "lizard" && computerChoice === "paper") {
        currentRoundWinner = "player";
    } else if (playerChoice === "lizard" && computerChoice === "scissors") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "lizard" && computerChoice === "spock") {
        currentRoundWinner = "player";
    } else if (playerChoice === "spock" && computerChoice === "rock") {
        currentRoundWinner = "player";
    } else if (playerChoice === "spock" && computerChoice === "paper") {
        currentRoundWinner = "computer";
    } else if (playerChoice === "spock" && computerChoice === "scissors") {
        currentRoundWinner = "player";
    } else if (playerChoice === "spock" && computerChoice === "lizard") {
        currentRoundWinner = "computer";
    }

    if (currentRoundWinner == "computer") {
        alert("Computer Wins!");
        incrementScoreComputer();
    } else if (currentRoundWinner == "player") {
        alert("You Win!");
        incrementScorePlayer();
    } else {
        alert("Draw!");
    }
}

function setWinnerMessage() {

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
