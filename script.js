function getComputerChoice() {
    Math.floor(Math.random() * 3);
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "rock";
    }   else if (choice === 1) {
    return "paper";
    }   else {
    return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors")
    return userChoice
}

console.log(getComputerChoice());
console.log(getHumanChoice());