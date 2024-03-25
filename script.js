const choices = ["Rock", "Paper","Scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay  = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore  = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
     // console.log(computerChoice);
    // console.log(playerChoice)
    var result = "";
     
if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        // console.log(playerChoice)
        switch(playerChoice){
            case 'Rock':
            result = (computerChoice === "Scissor") ? "YOU WIN !" : "YOU LOSE!";
            break;

            case 'Paper':
            result = (computerChoice === "Rock") ? "YOU WIN !" : "YOU LOSE!";
            break;

            case 'Scissor':
            result = (computerChoice === "Paper") ? "YOU WIN !" : "YOU LOSE!";
            break; 
        }
       
    }
   
    
    playerDisplay.textContent = `PLAYER:${playerChoice}`;
    computerDisplay.textContent = `COMPUTER:${computerChoice}`;
    resultDisplay.textContent = result;

//   resultDisplay.classList.remove("greenText","redText");
    switch(result){
       

            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;


             case "YOU WIN!":
                    resultDisplay.classList.add("greenText");
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    break;
        
    }

}