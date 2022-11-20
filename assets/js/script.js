let playerScore = document.getElementById("player-score-number");
let computerScore = document.getElementById("computer-score-number");
let winnerMessage = document.getElementById("winner-message");
let winnerExplanation = document.getElementById("winner-explanation");
let winner = document.getElementById("winner");
let playerChoice = document.getElementById("your-choice");
let computerChoice = document.getElementById("computer-choice");

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "reset-button") {
                alert("You clicked Play Again!");
            } else {
                let option = this.getAttribute("id");
                alert(`You clicked ${option}`);
            }
        });
    }
});

function playGame() {}
function showChoices() {}
function checkWinner() {}
function setWinnerMessage() {}
function incrementScorePlayer() {}
function incrementScoreComputer() {}
function setWinner() {}
