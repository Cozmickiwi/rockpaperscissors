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
console.log(getComputerChoice());