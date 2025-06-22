function getComputerChoice() {
    rand = Math.random();
    if (rand >= 0 && rand <= 0.33) {
        computerChoice = "rock";
    }
    if (rand >= 0.34 && rand <= 0.66) {
        computerChoice = "paper";
    }
    if (rand >= 0.67 && rand <= 1) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice(){
    humanChoice = window.prompt("Think fast chuckle nuts! (rock, paper, or scissors?)");

    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound (humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            result = "Oops! It's a draw!";
        }
        else if(computerChoice === "paper"){
            computerScore++;
            result = "You lose! Paper beats rock!";
        }else{
            humanScore++;
            result = "You win! Rock beasts scissors!";
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "paper"){
            result = "Oops! It's a draw!";
        }
        else if(computerChoice === "scissors"){
            computerScore++;
            result = "You lose! Scissors beats paper!";
        }else{
            humanScore++;
            result = "You win! Paper beats rock!"
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "scissors"){
            result = "Oops! It's a draw!";
        }
        else if(computerChoice === "rock"){
            computerScore++;
            result = "You lose! Rock beats scissors!";
        }else{
            humanScore++;
            result = "You win! Scissors beats paper!"
        }
    }
    console.log(result);
    return result;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);