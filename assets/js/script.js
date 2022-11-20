const playerScore = document.getElementById("player-score-number");
const computerScore = document.getElementById("computer-score-number");
const winnerMessage = document.getElementById("winner-message");
const winnerExplanation = document.getElementById("winner-explanation");
const winner = document.getElementById("winner");
const playerChoiceImage = document.getElementById("your-choice");
const computerChoiceImage = document.getElementById("computer-choice");
let playerChoice = "";
let computerChoice = "";
const possibleComputerChoices = ["rock", "paper", "scissors", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "reset-button") {
                alert("You clicked Play Again!");
            } else {
                let option = this.getAttribute("id");
                alert(`You clicked ${option}`);
                makeChoices(option);
            }
        });
    }
});

function playGame() {}

function makeChoices(option) {
    playerChoice = option;

    const randomChoice = Math.floor(Math.random() * 5);
    computerChoice = possibleComputerChoices[randomChoice];
}

function checkWinner() {}

function setWinnerMessage() {}

function incrementScorePlayer() {}

function incrementScoreComputer() {}

function setWinner() {}
