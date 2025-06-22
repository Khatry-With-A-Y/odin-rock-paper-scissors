function getComputerChoice() {
    rand = Math.random();
    let computerChoice;
    if (rand >= 0 && rand <= 0.33) {
        computerChoice = "rock";
    }
    else if (rand >= 0.34 && rand <= 0.66) {
        computerChoice = "paper";
    }
    else if (rand >= 0.67 && rand <= 1) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = window.prompt("Think fast chuckle nuts! (rock, paper, or scissors?)");
    return humanChoice;
}

function playGame(){
    console.log("Rock! Paper! Scissors! Shoot! Best of 5!");
    var humanScore = 0;
    var computerScore = 0;

    let i = 1;
    while (i < 6) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, i);
        i++;
    }

    function playRound (humanChoice, computerChoice, i){
        console.log("Round "+ i);
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
        }else if(humanChoice === "paper"){
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
        }else if(humanChoice === "scissors"){
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

        if(i === 5){
            console.log("Rounds complete!");
            if(humanScore > computerScore){
                console.log("Congrats! You are the winner!");
            }
            else if(computerScore > humanScore) {
                console.log("You lost! Better luck next time!");
            } else {
                console.log("It's a draw!");
            }

            console.log("Final Scores - ");
            console.log("Your score - " + humanScore);
            console.log("Opponent score - " + computerScore);
        }

    }
}


