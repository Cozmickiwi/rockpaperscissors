
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
    itemSelection.textContent = `You chose ${playerSelection}!`;
    itemSelection.style.fontStyle = "italic";
    itemSelection.style.fontWeight = "800";
    mainHeaderContainer.appendChild(itemSelection);
    usrScore.textContent = `Your score: ${playerScore}`;
    if(currentRound < 5){
        curRound.textContent = `ROUND ${currentRound}`;
    }
    else if(currentRound == 5){
        curRound.textContent= 'FINAL ROUND!';
    }
    compScore.textContent = `Computer score: ${computerScore}`;
    curRound.style.alignSelf = 'center';
    userScoreContainer.appendChild(usrScore);
    curRoundContainer.appendChild(curRound);
    compScoreContainer.appendChild(compScore);
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors'){
            playerScore++;
            roundOutcome = (`You win! ${playerSelection} beats ${computerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`);
        }
        else if (computerSelection == 'paper') {
            computerScore++;
            roundOutcome = (`You lose! ${computerSelection} beats ${playerSelection}. Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
        else {
            roundOutcome = (`It's a tie! Both chose ${playerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            playerScore++;
            roundOutcome = (`You win! ${playerSelection} beats ${computerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`);
        }
        else if (computerSelection == 'scissors') {
            computerScore++;
            roundOutcome = (`You lose! ${computerSelection} beats ${playerSelection}. Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
        else {
            roundOutcome = (`It's a tie! Both chose ${playerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }  

    }
    else {
        if (computerSelection == 'paper'){
            playerScore++;
            roundOutcome = (`You win! ${playerSelection} beats ${computerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`);
        }
        else if (computerSelection == 'rock') {
            computerScore++;
            roundOutcome = (`You lose! ${computerSelection} beats ${playerSelection}. Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
        else {
            roundOutcome = (`It's a tie! Both chose ${playerSelection}! Score: Player: ${playerScore} | Computer: ${computerScore}`)
        }
    }

    compGuessMsg();
    setTimeout(() => {
        roundOutput(roundOutcome);
    }, 3500);
    
    if (currentRound < 5){
        setTimeout(() => {
            newRound();
        }, 3500);
    }
    else if (currentRound >= 5){
        setTimeout(() => {
            gameEnd();
        }, 3500);
    }   
}
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let img = document.querySelectorAll("img");
let imgSelection = "";
let styleChoice = "";
let toggle = true;
let nR = true;
let currentRound = 1;
const usrScore = document.createElement('h4');
const curRound = document.createElement('h1');
const compScore = document.createElement('h4');
curRound.style.textDecoration = 'underline';
if (selected == false){
    styleChoice = 'selected';
}
else{
    styleChoice = 'img';
}
const mainHeaderContainer = document.querySelector('.mainHeader');
const mainHeader = document.createElement('h1');
const itemSelection = document.createElement('h2');
const topHeaderContainer = document.querySelector('.topHeader');
const userScoreContainer = document.querySelector('.userScore');
const curRoundContainer = document.querySelector('.round');
const compScoreContainer = document.querySelector('.compScore');
mainHeader.textContent = "CHOOSE YOUR FIGHTER!!!";

function game(){
    mainHeaderContainer.appendChild(mainHeader);
    function rockEventListener() {
        if (nR == true){
            imgSelection = 'rock';
            toggle = true
            nR = false
            rock.removeEventListener('mousedown', rockEventListener)
            choiceMade();
        }
    }
    function paperEventListener() {
        if (nR == true){
            imgSelection = 'paper';
            toggle = true
            nR = false
            paper.removeEventListener('mousedown', paperEventListener)
            choiceMade();
        }
    }
    function scissorsEventListener() {
        if (nR == true){
            imgSelection = 'scissors';
            toggle = true
            nR = false
            scissors.removeEventListener('mousedown', scissorsEventListener)
            choiceMade();
        }
    }
    if(nR == true){
    rock.addEventListener('mousedown', rockEventListener)
    }
    rock.addEventListener("transitionend", () => {
        rock.classList.remove('playing');
        rock.classList.toggle('selected', toggle);
    })
    if(nR == true){
    paper.addEventListener('mousedown', paperEventListener)
    }
    paper.addEventListener("transitionend", () => {
        paper.classList.remove('playing');
        paper.classList.toggle('selected', toggle);       
    })
    if(nR == true){
    scissors.addEventListener('mousedown', scissorsEventListener)
    }
    scissors.addEventListener("transitionend", () => {
        scissors.classList.remove('playing');
        scissors.classList.toggle('selected', toggle);        
    })
        function choiceMade () {
            if (selected == false) {
                mainHeaderContainer.removeChild(mainHeader);
                computerSelection = getComputerChoice();
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
    }
const btmContainer = document.querySelector(".bottom");        
function newRound() {
    const nrButton = document.createElement("button");
    const buttonContainer = document.querySelector('.bottom');
    nrButton.textContent = "Next Round 😸";
    buttonContainer.appendChild(nrButton);
    nrButton.addEventListener('click', () => {
        mainHeaderContainer.removeChild(itemSelection);
        toggle = false;
        selected = false;
        nR = true;
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
        currentRound++;
        if(currentRound < 5){
            curRound.textContent = `ROUND ${currentRound}`;
            game();
        }
        else if(currentRound == 5){
            curRound.textContent= 'FINAL ROUND!';
            game ();
        }
    })
    
    
    return('');
}
const roundOutcomeText = document.createElement('h1');
const outcomeContainer = document.querySelector('.roundOutcome');

function roundOutput(text) {
    usrScore.textContent = `Your score: ${playerScore}`;
    compScore.textContent = `Computer score: ${computerScore}`;
    roundOutcomeText.textContent = text;
    outcomeContainer.appendChild(roundOutcomeText);
}
let loading = "";
function compGuessMsg() {
    loading = "";
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
        if (count > 13) {
            msgContainer.removeChild(msg);
            myStopFunction();
            return('done');
        }  
    }
}
function gameEnd(){
    itemSelection.style.backgroundColor = 'rgba(88, 210, 210, 0.813)';
    itemSelection.style.padding = '1vw';
    itemSelection.style.margin = '1vh';
    itemSelection.style.borderRadius = "10px";
    if (playerScore > computerScore) {
        itemSelection.textContent = `You won the game! Let's go!!! Final results: Player: ${playerScore} | Computer: ${computerScore}`;
        kittyAnimation();
    }
    else if (playerScore < computerScore) {
        itemSelection.textContent = `You lost the game! Better luck next time! Final results: Player: ${playerScore} | Computer: ${computerScore}`;
    }
    else {
        itemSelection.textContent = `It's a tie!! Final results: Player: ${playerScore} | Computer: ${computerScore}`;
    }
    
    const ngButton = document.createElement("button");
    const buttonContainer = document.querySelector('.bottom');
    ngButton.textContent = "Play again?";
    buttonContainer.appendChild(ngButton);
    ngButton.addEventListener('click', () => {
        location.reload()
    })
}
let kittyImage = document.getElementById('image');

function kittyAnimation(){
    animationContainer.style.zIndex = "2";
    animation.style.animationPlayState= "running";
    animation.addEventListener("animationend", () => {
        animationContainer.removeAttribute('class');
        kittyImage.style.display = 'none';
    }) 
}
game();
