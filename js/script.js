// Create a function to return a choice of Rock Paper or Scissor
function getComputerChoice() {
    // Create variable randomNumber to hold a random number from 0 to 5
    let randomNumber = Math.round(Math.random() * 5);
    // Check and return Rock Paper or Scissor if the number happens to be 1, 2 or 3. If not, run the function again
    if (randomNumber === 0 || randomNumber === 4 || randomNumber === 5) {
        return getComputerChoice();
    } else if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "scissor";
    } else {
        return "paper";
    }
}

// Create a function to get a choice between Rock Paper or Scissor from the user
function getHumanChoice() {
    // Create a variable choice to hold an input from the user and convert the result to lower case for maximum compatibility
    let choice = prompt("Your turn: Rock, Paper or Scissor? ");
    choice = (choice === null) ? "" : choice.toLowerCase();
    // Check to see whether the input is valid and if it is valid, then return it. If not, run the function again
    if (choice === "rock" || choice === "paper" || choice === "scissor") {
        return choice;
    } else {
        alert("Invalid input. Please enter either rock, paper or scissor.");
        return getHumanChoice();
    }
}

// Create a function to play a single round of Rock Paper Scissor that takes in 2 parameters of human and computer choices
function playRound(humanChoice, computerChoice) {
    // Check who wins in the battle, and based on that return a true if the human wins, and a false if the computer wins
    // If humanChoice and computerChoice is the same, the natural conclusion is draw. Run the function again.
    if (humanChoice === computerChoice) {
        alert("It's a draw. Do it again!");
        return playRound(getHumanChoice(), getComputerChoice());
    }

    // Each choice of the user has two consequences, either they win, or they lose. This switch does the job.
    switch (humanChoice) {
        case "rock":
            // Paper beats Rock
            if (computerChoice === "paper") {
                alert("The computer chose Paper\n\nPaper beats Rock. You lose this round.");
                return false;
            }

            // Rock beats Scissor (the next natural possible response from the computer is Scissor)
            alert("The computer chose Scissor\n\nRock beats Scissor. You win this round.");
            return true;
        
        case "paper":
            // Paper beats Rock
            if (computerChoice === "rock") {
                alert("The computer chose Rock\n\nPaper beats Rock. You win this round.");
                return true;
            }

            // Scissor beats Rock (the next natural possible response from the computer is Scissor)
            alert("The computer chose Scissor\n\nScissor beats Paper. You lose this round.");
            return false;
        
        case "scissor":
            // Rock beats Scissor
            if (computerChoice === "rock") { 
                alert("The computer chose Rock\n\nRock beats Scissor. You lose this round.");
                return false;
            }

            // Scissor beats Paper (the next natural possible response from the computer is paper)
            alert("The computer chose Paper\n\nScissor beats Paper. You win this round.");
            return true;
    }
}
