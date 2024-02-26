// Main game code
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

function playGame(){
    var playerScore = 0;
    var computerScore = 0;
    var ties = 0;
    var finalWinner = "";
    for(var i = 1; i <= 5; i++){
        var playerSelection = prompt("Rock, paper, or scissors?: ");
        var computerSelection = getComputerChoice();
        var winner = gameRps(playerSelection, computerSelection);
        if(winner == "tie"){
            ties += 1;
        } else if(winner == "player"){
            playerScore += 1;
        } else if(winner == "computer"){
            computerScore += 1;
        }
        console.log("Player's score: " + playerScore +
                    "\nComputer's score: " + computerScore +
                    "\nTies: " + ties)
    }
    if(playerScore > computerScore){
        finalWinner = "Player";
    } else if(computerScore > playerScore){
        finalWinner = "Computer"
    } else {
        finalWinner = "None"
    }

    return ("Player's score: " + playerScore +
            "\nComputer's score: " + computerScore +
            "\nTies: " + ties +
            "\nThe winner is the " + finalWinner + "!");
}

console.log(playGame());
