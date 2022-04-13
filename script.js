function computerPlay() {
    let choice = Array("rock", "paper", "scissors")
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection
}



function playRound(playerSelection, computerSelection) {
  
if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("You tie")
} else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock")
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors")
} else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("You tie")
} else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beat Rock")
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beat Paper")
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beat Paper")
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beat Scissors")
} else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("You tie")
}
}

let playerSelection = window.prompt("Rock, paper or scissors?").toLowerCase()
console.log(playerSelection)
playRound(playerSelection, computerPlay())