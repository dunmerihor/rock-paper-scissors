function computerPlay() {
    const gestureList = ['rock', 'paper', 'scissors'];
    let gestureNumber = Math.floor(Math.random() * 3);
    return gestureList[gestureNumber];
}


function playRound(playerSelection, computerSelection, playerScore, computerScore) {

    const ROCK_SCIS = 'Rock beats Scissors!'
    const PAPER_ROCK = 'Paper beats Rock!'
    const SCIS_PAPER = 'Scissors beats Paper!'

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        console.log('Incorrect input');
    }

    else {
        if (playerSelection === computerSelection) {
            console.log('Tie!');
            const result = [playerScore, computerScore]
            return result;
        }

        else if (playerSelection === 'rock') {
            if (computerSelection === 'scissors')  {
                console.log('You Win! ' + ROCK_SCIS);
                playerScore++
                const result = [playerScore, computerScore]
                return result;
            }  

            else {
                console.log('You Lose! ' + PAPER_ROCK);
                computerScore++;
                const result = [playerScore, computerScore]
                return result;
            }
        }

        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock')  {
                console.log('You Win! ' + PAPER_ROCK);
                playerScore++;
                const result = [playerScore, computerScore]
                return result;
            }  

            else {
                console.log('You Lose! ' + SCIS_PAPER);
                computerScore++;
                const result = [playerScore, computerScore]
                return result;
            }
        }

        else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper')  {
                console.log('You Win! ' + SCIS_PAPER);
                playerScore++
                const result = [playerScore, computerScore]
                return result;
            }  

            else {
                console.log('You Lose! ' + ROCK_SCIS);
                computerScore++;
                const result = [playerScore, computerScore]
                return result;
            }
        }

        return result
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <= 5; i++) {
        let playerSelection = prompt('Choose rock, paper or scissors.').toLowerCase();
        let computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection, playerScore, computerScore)
        playerScore = result[0]
        computerScore = result[1]
        console.log('Player Score: ' + playerScore)
        console.log('Computer Score: ' + computerScore)
    }

    if (playerScore > computerScore){
        console.log('You Win!')
    }

    else if (playerScore < computerScore) {
        console.log('You Lose!')
    }
    
    else if (playerScore === computerScore) {
        console.log('Tie!')
    }
}


game();
