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
