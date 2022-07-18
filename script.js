// called when player clicks a button
function playRound(playerSelection) {
    var computerSelection = getComputerChoice();
    // calculate winner and apply scores
    if(playerScore < 5 && computerScore < 5){
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
    document.getElementById('comp-selection').innerText = "Computer Selected: " + computerSelection;
    updateScores();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return(choices[Math.floor(Math.random() * choices.length)]);
}

function updateScores() {
    document.getElementById('scores').innerText = playerScore + " : " + computerScore;
    if(playerScore >= 5){
        declareWinner("Player");
    }
    else if(computerScore >= 5){
        declareWinner("Computer");
    }
}

function declareWinner(winner) {
    document.getElementById('winner').innerText = winner + " wins!"
}

var playerScore = 0;
var computerScore = 0;