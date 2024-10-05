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
