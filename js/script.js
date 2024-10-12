// Create a function to return a choice of Rock Paper or Scissor
function getComputerChoice() {
    // Create variable randomNumber to hold a random number from 0 to 5
    let randomNumber = Math.floor(Math.random() * 5);
    // Check and return Rock Paper or Scissor if the number happens to be 1, 2 or 3. If not, run the function again
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "scissor";
    } else if (randomNumber === 3) {
        return "paper";
    } else {
        return getComputerChoice();
    }
}

// Create a function to play a single round of Rock Paper Scissor that takes in 2 parameters of human and computer choices
function playRound(humanChoice, computerChoice) {
    // Check who wins in the battle, and based on that return a true if the human wins, and a false if the computer wins
    // If humanChoice and computerChoice is the same, the natural conclusion is draw. Return "draw".
    if (humanChoice === computerChoice) {
        messageUI.textContent = "It's a draw. Do it again!";
        return "draw";
    }

    // Each choice of the user has two consequences, either they win, or they lose. This switch does the job.
    switch (humanChoice) {
        case "rock":
            // Paper beats Rock
            if (computerChoice === "paper") {
                messageUI.textContent = "The computer chose Paper. Paper beats Rock. You lose this round.";
                return false;
            }

            // Rock beats Scissor (the next natural possible response from the computer is Scissor)
            messageUI.textContent = "The computer chose Scissor. Rock beats Scissor. You win this round.";
            return true;

        case "paper":
            // Paper beats Rock
            if (computerChoice === "rock") {
                messageUI.textContent = "The computer chose Rock. Paper beats Rock. You win this round.";
                return true;
            }

            // Scissor beats Rock (the next natural possible response from the computer is Scissor)
            messageUI.textContent = "The computer chose Scissor. Scissor beats Paper. You lose this round.";
            return false;

        case "scissor":
            // Rock beats Scissor
            if (computerChoice === "rock") {
                messageUI.textContent = "The computer chose Rock. Rock beats Scissor. You lose this round.";
                return false;
            }

            // Scissor beats Paper (the next natural possible response from the computer is paper)
            messageUI.textContent = "The computer chose Paper. Scissor beats Paper. You win this round.";
            return true;
    }
}

let scoreHuman = 0;
let round = 0;

const roundUI = document.querySelector("#roundUI");
const scoreHumanUI = document.querySelector("#scoreHumanUI");
const scoreComputerUI = document.querySelector("#scoreComputerUI");
const playerChoiceUI = document.querySelector("#playerChoiceUI");
const computerChoiceUI = document.querySelector("#computerChoiceUI");
const messageUI = document.querySelector("#messageUI");

const actions = document.querySelector(".playerActions");
actions.addEventListener("click", newPlayGame);

function newPlayGame(event) {
    // If the right button is not chosen, don't do anything.
    if (!event.target.id) return;
    else if (event.target.id === "reset") {
        round = 0;
        scoreHuman = 0;
        roundUI.textContent = round;
        scoreHumanUI.textContent = scoreHuman;
        scoreComputerUI.textContent = 0;
        playerChoiceUI.textContent = "Here comes your choice";
        computerChoiceUI.textContent = "Here comes the computer's choice";
        messageUI.textContent = "Will you save the world?";
        return; // Do nothing.
    }

    roundUI.textContent = ++round;

    let humanSelection = event.target.id;
    let computerSelection = getComputerChoice();
    
    playerChoiceUI.textContent = `You chose ${humanSelection}`;
    computerChoiceUI.textContent = `I chose ${computerSelection}`;
    
    play = playRound(humanSelection, computerSelection);
    
    if (play === "draw") {
        --round;
        return;
    } else if (play) { // Human Wins
        scoreHumanUI.textContent = ++scoreHuman;
    } else { // Computer Wins
        scoreComputerUI.textContent = round - scoreHuman;
    }

    if (round === 5) {
        if (scoreHuman >= 3) {
            messageUI.textContent = `Yay!!! Your score is ${scoreHuman}. You win the game from these tins! The world is saved.`;
        } else {
            messageUI.textContent = `Booo!!! Computer's score is ${round - scoreHuman}\n\nYou lose the game, computers will rule the world now. Hahahahaha!`;
        }

        round = 0;
        scoreHuman = 0;
        scoreHumanUI.textContent = scoreHuman;
        scoreComputerUI.textContent = 0;
    }
}
