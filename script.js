function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return("Tie");
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return("You Lose!");
        }
        else if(computerSelection == "scissors"){
            return("You Win!");
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return("You Lose!");
        }
        else if(computerSelection == "rock"){
            return("You Win!");
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return("You Lose!");
        }
        else if(computerSelection == "paper"){
            return("You Win!");
        }
    }
}

function getComputerChoice() {
    return(choices[Math.floor(Math.random() * choices.length)]);
}

function game() {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}
const choices = ['rock', 'paper', 'scissors'];
game();