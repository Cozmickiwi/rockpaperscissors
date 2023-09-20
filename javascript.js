
// create prompt for player to choose either rock paper scissors
// convert player choice to lower case
// assign this to variable called playerSelection
/*function playerDecision() {
    return prompt('What is your choice?');
}
*/
// create computerSelection variable

// create computer and player score variables
let playerScore = 0;
let computerScore = 0;
// create message for outcome from each round, include score
let roundOutcome;
// create random int from 1-3 and assign 'rock' to 1, 'paper' to 2 and 'scissors' to 3
// then return randomly chosen string
let playerSelection = "";
let computerSelection = getComputerChoice();
let selected = false;
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

    compGuessMsg();
    setTimeout(() => {
        roundOutput(roundOutcome);
    }, 6000);
    
    
    setTimeout(() => {
        newRound();
    }, 7000);
    
}

// create function called game() use playRound inside of this function to play 5 round game, keep score and report winner at end
/*function game() {
    let round = 1;
    while (round < 6) {
        console.log(`Round ${round} of 5:`);
        ///let playerSelection = playerDecision();
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
} */
//function start() {
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");
    let img = document.querySelectorAll("img");
    let imgSelection = "";
    let styleChoice = "";
    let toggle = true;
    if (selected == false){
        styleChoice = 'selected';
    }
    else{
        styleChoice = 'img';
    }
    rock.addEventListener('mousedown', () => {
        imgSelection = 'rock';
        toggle = true
        choiceMade();
    })
    rock.addEventListener("transitionend", () => {
        rock.classList.remove('playing');
        rock.classList.toggle('selected', toggle);
    })
    paper.addEventListener('mousedown', () => {
        imgSelection = 'paper';
        toggle = true
        choiceMade();
    })
    paper.addEventListener("transitionend", () => {
        paper.classList.remove('playing');
        paper.classList.toggle('selected', toggle);
    })
    scissors.addEventListener('mousedown', () => {
        toggle = true
        imgSelection = 'scissors';
        choiceMade();
    })
    scissors.addEventListener("transitionend", () => {
        scissors.classList.remove('playing');
        scissors.classList.toggle('selected', toggle);
    })
        function choiceMade () {
            if (selected == false) {
                computerSelection=  getComputerChoice();
                if (imgSelection == 'rock'){
                    selected = true;
                    rock.classList.add('playing');
                    playerSelection = imgSelection;
                    playRound(playerSelection, computerSelection);
                }
                else if (imgSelection == 'paper'){
                    selected = true;
                    paper.classList.add('playing');
                    playerSelection = imgSelection;
                    playRound(playerSelection, computerSelection);
                }
                else if (imgSelection == 'scissors'){
                    selected = true;
                    scissors.classList.add('playing');
                    playerSelection = imgSelection;
                    playRound(playerSelection, computerSelection);
                }
            }
        }

const btmContainer = document.querySelector(".bottom");        
function newRound() {
    const nrButton = document.createElement("button");
    const buttonContainer = document.querySelector('.bottom');
    nrButton.textContent = "Next Round :D";
    buttonContainer.appendChild(nrButton);
    nrButton.addEventListener('click', () => {
        toggle = false;
        if (imgSelection == 'rock'){
            rock.classList.remove('selected');
        }
        else if (imgSelection == 'paper'){
            paper.classList.remove('selected');
            
        }
        else if (imgSelection == 'scissors'){
            scissors.classList.remove('selected');
        }
        buttonContainer.removeChild(nrButton);
        outcomeContainer.removeChild(roundOutcomeText);
        
    })
    
    selected = false;
    return('');
}
const roundOutcomeText = document.createElement('h1');
const outcomeContainer = document.querySelector('.roundOutcome');

function roundOutput(text) {
    roundOutcomeText.textContent = text;
    outcomeContainer.appendChild(roundOutcomeText);
}
let loading = "";
function compGuessMsg() {
    let msgContainer = document.querySelector(".compGuessMsg");
    let msg = document.createElement("h2");
    let count = 0;
    const myInterval = setInterval(loadingGen, 250);
    function myStopFunction() {
        clearInterval(myInterval);
    }
    function loadingGen() {
        loading += ".";
        count += 1;
        msg.textContent = `Computer generating "super" educated guess${loading}`;
        msgContainer.appendChild(msg);
        if (count % 3 == 0) {
            loading = "";
        }
        if (count > 23) {
            msgContainer.removeChild(msg);
            myStopFunction();
            return('done');
        }  
    }
}