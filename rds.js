const Rock = "ROCK"
const Paper = "PAPER"
const Scissors = "SCISSORS"
let playerSelection, computerSelection;

function computerPlay() {
    let random = Math.floor(Math.random() * 100);
    if (random < 34) {
        return Rock;
    } else if (random < 67) {
        return Paper;
    }

    return Scissors;
}

function playRound(playerSelect, computerSelection) {
    //let playerSelect = prompt("Select rock, paper or scissors")
    playerSelection = playerSelect.toUpperCase();
    computerSelection = computerPlay();
    if (computerSelection == Rock && playerSelection == Scissors) {
        let arr = [0, "You Lose! Rock beats Scissors"];
        return arr;
    } else if (computerSelection == Rock && playerSelection == Paper) {
        let arr = [1, "You Win! Paper beats Rock"];
        return arr;
    } else if (computerSelection == Rock && playerSelection == Rock) {
        let arr = [2, "Draw"];
        return arr;
    } else if (computerSelection == Paper && playerSelection == Scissors) {
        let arr = [1, "You Win! Scissors beats Paper"];
        return arr;
    } else if (computerSelection == Paper && playerSelection == Paper) {
        let arr = [2, "Draw"];

        return arr;
    } else if (computerSelection == Paper && playerSelection == Rock) {
        let arr = [0, "You Lose! Paper beats Rock"];
        return arr;
    } else if (computerSelection == Scissors && playerSelection == Scissors) {
        let arr = [2, "Draw"];
        return arr;
    } else if (computerSelection == Scissors && playerSelection == Paper) {
        let arr = [0, "You Lose! Scissors beats Paper"];
        return arr;
    } else if (computerSelection == Scissors && playerSelection == Rock) {
        let arr = [1, "You Win! Rock beats Scissors"];
        return arr;
    }
    return 2;
}

const container = document.querySelector('#container');
const buttons = document.querySelectorAll('button');
let rounds = 0;
let botScore = 0;
let playerScore = 0;
let outcome = "";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (rounds < 5) {
            let game = myFunction(button);
            if (game == 0) {
                botScore++;
            } else if (game == 1) {
                playerScore++;
            };

        } else {
            if (botScore < playerScore) {
                outcome = "Player wins!"
            } else if (botScore > playerScore) {
                outcome = "Bot wins!"
            } else {
                outcome = "It's a draw"
            }
            
            const result = document.createElement('p');
            result.textContent = outcome + " Final Score: Bot Score: " + botScore + " Player Score: " + playerScore
            container.appendChild(result);
            const thanks = document.createElement('p');
            thanks.textContent = "Thanks for playing! Refresh page to restart"
            thanks.style.marginTop = 5;
            container.appendChild(thanks);
            buttons.forEach((button) => {
                button.disabled = true;
            });

        }
        rounds++;
    });
});

function myFunction(button) {
    const content = document.createElement('div');
    content.classList.add('content');
    let roundResult = playRound(button.id);
    content.textContent = roundResult[1];
    container.appendChild(content);
    return roundResult[0];
}







// function game() {
//     let botScore = 0;
//     let playerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let round = playRound();
//         if (round == 0) {
//             botScore++;
//         } else if (round == 1) {
//             playerScore++;
//         };
//     }
//     console.log("Final Score: Bot Score: " + botScore + "\n" + "Player Score: " + playerScore);
// }




