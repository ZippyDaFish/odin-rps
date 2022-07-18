function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return("Tie");
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            computerScore++;
        }
        else if(computerSelection == "scissors"){
            playerScore++;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            computerScore++;
        }
        else if(computerSelection == "rock"){
            playerScore++;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            computerScore++;
        }
        else if(computerSelection == "paper"){
            playerScore++;
        }
    }
}

function getComputerChoice() {
    return(choices[Math.floor(Math.random() * choices.length)]);
}

function game() {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);
}
const choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
game();