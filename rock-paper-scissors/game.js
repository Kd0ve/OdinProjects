// Main game code
const playerScore = 0;
const computerScore = 0;
const ties = 0;
function getComputerChoice(){
    var choiceNum = Math.floor(Math.random() * 3) + 1;
    var choiceRps = "";
    if(choiceNum == 1){
        choiceRps = "rock";
    } else if(choiceNum == 2){
        choiceRps = "paper";
    } else {
        choiceRps = "scissors";
    }

    return choiceRps;
}

function gameRps(playerSelection, computerSelection){
    if(computerSelection == playerSelection){
        return "tie";
    } else if(computerSelection == "rock"){
        if(playerSelection == "paper"){
            return "player";
        } else {
            return "computer";
        }
    } else if(computerSelection == "paper"){
        if(playerSelection == "scissors"){
            return "player";
        } else {
            return "computer";
        }
    } else if(computerSelection == "scissors"){
        if(playerSelection == "rock"){
            return "player";
        } else {
            return "computer";
        }
    }
}

/*
function playGame(playerSelection, computerSelection){
    const winner = gameRps(playerSelection, computerSelection);
    return winner;
    
    console.log("Player's score: " + playerScore +
                "\nComputer's score: " + computerScore +
                "\nTies: " + ties)
    if(playerScore > computerScore){
        finalWinner = "Player";
    } else if(computerScore > playerScore){
        finalWinner = "Computer"
    } else {
        finalWinner = "None"
    }
    return ("The winner was: "+finalWinner);
    
}
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const player = document.getElementById("gamePlayer");
    const computer = document.getElementById("gameComputer");
    const gameTies = document.getElementById("gameTies");

    let overallPlayerScore = 0;
    let overallComputerScore = 0;
    let overallTies = 0;
    rock.addEventListener('click', () => {
        const result = gameRps("rock", getComputerChoice());
        if(result === "player"){
            overallPlayerScore += 1;
        } else if(result === "computer"){
            overallComputerScore += 1;
        } else {
            overallTies += 1;
        }
        player.textContent=overallPlayerScore;
        computer.textContent=overallComputerScore;
        gameTies.textContent=overallTies;
    });
    paper.addEventListener('click', () => {
        const result = gameRps("paper", getComputerChoice());
        if(result === "player"){
            overallPlayerScore += 1;
        } else if(result === "computer"){
            overallComputerScore += 1;
        } else {
            overallTies += 1;
        }
        player.textContent=overallPlayerScore;
        computer.textContent=overallComputerScore;
        gameTies.textContent=overallTies;
    });
    scissors.addEventListener('click', () => {
        const result = gameRps("scissors", getComputerChoice());
        if(result === "player"){
            overallPlayerScore += 1;
        } else if(result === "computer"){
            overallComputerScore += 1;
        } else {
            overallTies += 1;
        }
        player.textContent=overallPlayerScore;
        computer.textContent=overallComputerScore;
        gameTies.textContent=overallTies;
    });
});