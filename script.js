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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function playRound(humanChoice, computerChoice) {
      console.log("Human chose:", humanChoice);
      console.log("Computer chose:", computerChoice);
  
      humanChoice = humanChoice.toLowerCase();
  
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log("You win!");
        humanScore++;
      } else {
        console.log("You lose jackass!");
        computerScore++;
      }
  
      console.log("Current Scores - Humans:", humanScore, "| Computer:", computerScore);
    }
    }
  
    // Play 5 rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
  
    console.log("Final Scores - Human:", humanScore, "| Computer:", computerScore);
  
    if (humanScore > computerScore) {
      console.log("You win jackass!");
    } else if (humanScore < computerScore) {
      console.log("You lose dumbass!");
    } else {
      console.log("Dumbass you tied!");
    }
  
  playGame();
  