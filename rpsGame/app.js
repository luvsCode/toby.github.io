//ROCK PAPER SCISSORS GAME
//JAVASCRIPT
// 12.28.22

const game = () =>
{
    let playerScore = 0;
    let cpuScore = 0;

    const startGame = () =>
    {
        //const btnBox = document.querySelectorAll('.btnBox button');
        const rockBtn = document.querySelector('.rockBtn');
        const paperBtn = document.querySelector('.paperBtn');
        const scissorsBtn = document.querySelector('.scissorsBtn');
        const introBtn = document.querySelector(".introBtn");
        const intro = document.querySelector(".intro");
        const aniTxt = document.querySelector('.aniTxt');
        const playerHand = document.querySelector('.playerHand');
        const cpuHand = document.querySelector('.cpuHand');
        const cpuOptions = ['rock', 'paper', 'scissors'];
        const outro = document.querySelector('.outro');
        const outroTxt = document.querySelector('.outroTxt');

        outro.style.display = 'none';
        introBtn.addEventListener('click', () =>
        {
            const playerName = document.querySelector('.playerName').value;
            const displayName = document.querySelector('.pName');                
            displayName.textContent = playerName;
            intro.remove();
           // startGame();
            return playerName;
        })

        //BRING OUT OUTRO
        const endGame = () =>
        {
//            const outro = document.querySelector('.outro');
  //          const outroTxt = document.querySelector('.outroTxt');
            const outroBtn = document.querySelector('.outroBtn');
            //const mainContainer = document.querySelector('.mainContainer');

            if(playerScore === 3)
            {
                outro.style.display = 'block';
                //mainContainer.style.display = 'none';
                outroTxt.textContent = 'players score is at 10';
                outroBtn.addEventListener('click', () =>
                {
                    location.reload();
                })
                console.log('players score is at 10');
                
            }
            else if(cpuScore === 3)
            {
                outro.style.display = 'block';
                //mainContainer.style.display = 'none';
                outroTxt.textContent = 'cpu score is at 10';
                outroBtn.addEventListener('click', () =>
                {
                    location.reload();
                })
                console.log('cpu score is at 10');
            }            
        }

        // UPDATE SCORE FUNCTION
        const updateScore = () =>
        {
            let pScore = document.querySelector('.pScore');
            let cScore = document.querySelector('.cScore');        
            pScore.textContent = playerScore;
            cScore.textContent = cpuScore;
            endGame();
        };

        //CPU OPTION FUNCTION
        const cpuRoll = () =>
        {
            const cpuRandomize = Math.floor(Math.random()*3);
            const cpuChoice = cpuOptions[cpuRandomize];
            cpuHand.src = `./assets/${cpuChoice}.svg`;
            return cpuChoice;
        }  
        
        // ROCK BUTTON FUNCTION
        rockBtn.addEventListener('click', ()=>
        {
            playerChoice = 'rock';
            compareOptions(playerChoice, cpuRoll());
            playerHand.src = `./assets/${playerChoice}.svg`;
        })
        
        // PAPER BUTTON FUNCTION
        paperBtn.addEventListener('click', ()=>
        {
            playerChoice = 'paper';
            compareOptions(playerChoice, cpuRoll());
            playerHand.src = `./assets/${playerChoice}.svg`;
        })

        // SCISSORS BUTTON FUNCTION
        scissorsBtn.addEventListener('click', ()=>
        {
            playerChoice = 'scissors';
            compareOptions(playerChoice, cpuRoll());
            playerHand.src = `./assets/${playerChoice}.svg`;
        }) 
        
        // COMPARE BOTH CHOICES
        const compareOptions = (playerChoice, cpuChoice) =>
        {
            if(playerChoice === cpuChoice)
            {
                console.log('its a tie! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice )
                aniTxt.textContent = 'its a tie!';
                return;
            }
            //CHECK FOR ROCK
            if(playerChoice === 'rock')
            {
                if(cpuChoice === 'scissors')
                {
                    playerScore++;
                    updateScore();
                    console.log('player wins!!! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice );
                    aniTxt.textContent = 'You win!';
                    return;
                }
                else
                {
                    cpuScore++;
                    updateScore();
                    console.log('cpu wins!!! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice )
                    aniTxt.textContent = 'CPU wins!!';
                    return;
                }
            }
            //CHECK FOR PAPER
            if(playerChoice === 'paper')
            {
                if(cpuChoice === 'scissors')
                {
                    cpuScore++;
                    updateScore();
                    console.log('cpu wins!!! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice);
                    aniTxt.textContent = 'CPU wins!!';
                    return;
                }
                else
                {
                    playerScore++;
                    updateScore();
                    console.log('player wins!!! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice )
                    aniTxt.textContent = 'You win!!';
                    return;
                }
            }
            //CHECK FOR SCISSORS
            if(playerChoice === 'scissors')
            {
                if(cpuChoice === 'rock')
                {
                    cpuScore++;
                    updateScore();
                    console.log('cpu wins!!! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice);
                    aniTxt.textContent = 'CPU wins!!';
                    return;
                }
                else
                {
                    playerScore++;
                    updateScore();
                    console.log('player wins!!! player picked: ' + playerChoice + ' and cpu picked: ' + cpuChoice )
                    aniTxt.textContent = 'You Win!!';
                    return;
                }
            }
        }        
    }
    startGame();
}
game();