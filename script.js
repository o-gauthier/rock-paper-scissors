function computerPlay() {
    let choice = Array("rock", "paper", "scissors")
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection
}



function playRound(playerSelection, computerSelection) {
  
if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("You tie")
    return 1
} else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock")
    return 0
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors")
    return 2
} else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("You tie")
    return 1
} else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beat Rock")
    return 2
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beat Paper")
    return 0
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beat Paper")
    return 2
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beat Scissors")
    return 0
} else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("You tie")
    return 1
    
}
}

function game() {
    let computerScore = 0
    let playerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Rock, paper or scissors?").toLowerCase()
        winner = playRound(playerSelection, computerPlay())
        if (winner === 0) {
            computerScore += 1
        } else if (winner === 2) {
            playerScore += 1

    }
    
}
    checkWinner(playerScore,computerScore)

}




function checkWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        console.log("You tie the game ")
    } else if (playerScore > computerScore) {
        console.log("Youn win the game")
    } else {
        console.log("You lose the game")
    }
}


game()