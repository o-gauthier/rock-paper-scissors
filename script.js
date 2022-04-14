function computerPlay() {
    let choice = Array("rock", "paper", "scissors")
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection
}



function playRound(playerSelection, computerSelection) {
  
if (playerSelection === "rock" && computerSelection === "rock") {
    return "You tie"
} else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock"
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors"
} else if (playerSelection === "paper" && computerSelection === "paper") {
    return "You tie"
} else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beat Rock"
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper"
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat Paper"
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beat Scissors"
} else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "You tie"
}
}

let playerSelection = window.prompt("Rock, paper or scissors?").toLowerCase()
console.log(playRound(playerSelection, computerPlay()))