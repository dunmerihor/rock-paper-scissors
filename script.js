function computerPlay() {
    const img = document.querySelector('.computer-choice-picture');
    const gestureList = ['rock', 'paper', 'scissors'];
    let gestureNumber = Math.floor(Math.random() * 3);
    switch (gestureNumber) {
        case 0:
            img.src="pictures/rock.png";
            break;
        case 1:
            img.src="pictures/paper.png";
            break;
        case 2:
            img.src="pictures/scissors.png";
            break;
    }
    return gestureList[gestureNumber];
}


function playRound(playerSelection, computerSelection, playerScore, computerScore) {

    const ROCK_SCIS = 'Rock beats Scissors!';
    const PAPER_ROCK = 'Paper beats Rock!';
    const SCIS_PAPER = 'Scissors beats Paper!';
    const roundResult = document.querySelector('.round-result');

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie!';
        const result = [playerScore, computerScore];
        return result;
    }

    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors')  {
            roundResult.textContent = 'You Win! ' + ROCK_SCIS;
            playerScore++;
            const result = [playerScore, computerScore];
            return result;
        }  

        else {
            roundResult.textContent = 'You Lose! ' + PAPER_ROCK;
            computerScore++;
            const result = [playerScore, computerScore];
            return result;
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock')  {
            roundResult.textContent = 'You Win! ' + PAPER_ROCK;
            playerScore++;
            const result = [playerScore, computerScore];
            return result;
        }  

        else {
            roundResult.textContent = 'You Lose! ' + SCIS_PAPER;
            computerScore++;
            const result = [playerScore, computerScore];
            return result;
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper')  {
            roundResult.textContent = 'You Win! ' + SCIS_PAPER;
            playerScore++;
            const result = [playerScore, computerScore];
            return result;
        }  

        else {
            roundResult.textContent = 'You Lose! ' + ROCK_SCIS;
            computerScore++;
            const result = [playerScore, computerScore];
            return result;
        }
    }
}


function game(playerSelection, computerSelection, playerScore, computerScore) {
    const result = playRound(playerSelection, computerSelection, playerScore, computerScore);

    playerScore = result[0];
    computerScore = result[1];

    setScore(playerScore, computerScore);
}


function getScore() {
    scoreDiv = document.querySelector('.score');
    let scoreText = scoreDiv.textContent;
    let score = scoreText.match(/\d+/g);
    return score;
}


function setScore(playerScore, computerScore) {
    scoreDiv = document.querySelector('.score');
    scoreDiv.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;
}


function playGame(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    const score = getScore();
    let playerScore = score[0];
    let computerScore = score[1];

    game(playerSelection, computerSelection, playerScore, computerScore);
    
    const finalScore = getScore();

    if (finalScore[0] == 5) {
        result = document.querySelector('.game-result');
        result.textContent = "You Win!";
        setScore(0, 0);
    }

    else if (finalScore[1] == 5) {
        result = document.querySelector('.game-result');
        result.textContent = "You Lose!";
        setScore(0, 0);
    }
}


const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.forEach(btn => btn.addEventListener('click', playGame));
