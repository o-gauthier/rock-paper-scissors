function computerPlay() {
    let choice = Array("Rock", "Paper", "Scissors")
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice
}

console.log(computerPlay())