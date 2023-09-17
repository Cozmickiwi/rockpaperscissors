// create prompt for player to choose either rock paper scissors
// convert player choice to lower case
// assign this to variable called playerSelection
function playerDecision() {
    return prompt('What is your choice?');
}

// create computerSelection variable

// create computer and player score variables
let playerScore = 0;
let computerScore = 0;
// create message for outcome from each round, include score
let roundOutcome;
// create random int from 1-3 and assign 'rock' to 1, 'paper' to 2 and 'scissors' to 3
// then return randomly chosen string
function getComputerChoice() {
    let ranNum = Math.floor((Math.random() * 3) + 1);
    let ranChoice = "";
    if (ranNum == 1) {
        ranChoice = 'rock';
    }
    else if (ranNum == 2) {
        ranChoice = 'paper';
    }
    else {
        ranChoice = 'scissors';
    }
    return(ranChoice);
}
// create function that plays single round
// function should take two parameters, playerSelection and computerSelection
// use if...else statements to determine winner, then return string based on outcome
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors'){
            playerScore++;
            roundOutcome = (`You win! ${playerSelection} Beats ${computerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`);
        }
        else if (computerSelection == 'paper') {
            computerScore++;
            roundOutcome = (`You lose! ${computerSelection} Beats ${playerSelection}. Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
        else {
            roundOutcome = (`It's a tie! Both chose ${playerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            playerScore++;
            roundOutcome = (`You win! ${playerSelection} Beats ${computerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`);
        }
        else if (computerSelection == 'scissors') {
            computerScore++;
            roundOutcome = (`You lose! ${computerSelection} Beats ${playerSelection}. Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
        else {
            roundOutcome = (`It's a tie! Both chose ${playerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }  

    }
    else {
        if (computerSelection == 'paper'){
            playerScore++;
            roundOutcome = (`You win! ${playerSelection} Beats ${computerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`);
        }
        else if (computerSelection == 'rock') {
            computerScore++;
            roundOutcome = (`You lose! ${computerSelection} Beats ${playerSelection}. Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
        else {
            roundOutcome = (`It's a tie! Both chose ${playerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
    }
}
// create function called game() use playRound inside of this function to play 5 round game, keep score and report winner at end
function game() {
    let round = 1;
    while (round < 6) {
        console.log(`Round ${round} of 5:`);
        let playerSelection = playerDecision().toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(roundOutcome);
        round++;
    }
    if (playerScore > computerScore) {
        return(`You won the game!! Final results: Player: ${playerScore} | Computer: ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        return(`You lost the game! Better luck next time! Final results: Player: ${playerScore} | Computer: ${computerScore}`);
    }
    else {
        return(`It's a tie!! Final results: Player: ${playerScore} | Computer: ${computerScore}`);
    }
}

console.log(game());