function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return 'rock'
    }else if (choice ==1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock'){
        if (computerSelection == 'rock'){
            return 'Draw!';
        }else if (computerSelection == 'paper'){
            return 'You Lose! Paper beats Rock';
        }else{
            return 'You Win! Rock beats Scissors';
        }
    }else if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            return 'You Win! Paper beats Rock';
        }else if(computerSelection == 'paper'){
            return 'Draw!';
        }else{
            return 'You Lose! Scissors beat Paper';
        }
    }else if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissors';
        }else if (computerSelection == 'paper'){
            return 'You Win! Scissors beat Paper';
        }else{
            return 'Draw!';
        }
    }
}

  function game(){
    console.log('Rock Paper Scissors Game - 5 rounds');
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i+1}! Rock, Paper or Scissors?`);
        let roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        if (roundResult == 'Draw!'){
            draws++;
        } else if (roundResult[4] == 'W'){
            playerScore++
        } else{
            computerScore++
        }
        console.log(`The score is: \n Player - ${playerScore} \n Computer - ${computerScore} \n Draws - ${draws}`);
    }
    if (playerScore>computerScore){
        console.log('Game - Player Wins');
    }else if (computerScore>playerScore){
        console.log('Game - Computer Wins');
    }else{
        console.log('Game - Draw');
    }
  }

  game();