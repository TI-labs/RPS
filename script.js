

function getComputerChoice(){
    let valeurAleatoire = Math.floor(Math.random()*100)+1;

    if(valeurAleatoire <= 32){
        return "Rock"
    }else if(valeurAleatoire <= 65){
        return "Paper"
    }else{
        return "Scissors"
    }
    
}

//return rock paper or scissors


function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(computerSelection){
        case 'rock': 
            if(playerSelection == 'paper'){
                return 'You win! paper beats rock';
            }else if(playerSelection == 'scissors'){
                return 'You lose! rock beats scissors'
            }else{return 'Draw'}
            break;
        case 'paper': 
            if(playerSelection == 'rock'){
                return 'You lose! paper beats rock.';
            }else if(playerSelection == 'scissors'){
                return 'You win! scissors beats paper.'}
            else{return 'Draw'}
            break;
        case 'scissors': 
            if(playerSelection == 'rock'){
                return 'You win! rock beats scissors';
            }else if(playerSelection == 'paper'){
                return 'You lose! scissors beats paper.'
            }else{return 'Draw'}
            
            break;
    } 
    } 
    // return string

function getResultRound(playerSelection,computerSelection){
       
        if  (playRound(playerSelection,computerSelection).slice(0,1) == "D"){
                
            return 'd'

          }else if(playRound(playerSelection,computerSelection).slice(4,5)=='w'){
                         
            return 'w'

          }else{
            
            return 'l'
                        
         }   
    }


function getWinnerFifthRound(myScore,computerScore){
    if(myScore>computerScore){
       return 'You won the fives round !'
    }else if(myScore == computerScore){return 'finally a draw'}
    else{
        return 'booooh loser';
    }
}





    let btns = document.querySelectorAll('button');
    let roundIndex = 0;
    let myScore = 0;
    let computerScore = 0;
    
    btns.forEach(btn => btn.addEventListener('click',(e) => {
        let computerSelection = getComputerChoice();
        let divResult = document.createElement('div');
        let body = document.querySelector('body');
        body.appendChild(divResult);

        if(roundIndex == 5){
            roundIndex = 0;
            myScore = 0;
            computerScore = 0;
        }

        if(getResultRound(e.target.className,computerSelection) == 'w'){
            myScore++;
            roundIndex++;
        } else if(getResultRound(e.target.className,computerSelection) == 'l'){
            computerScore++;
            roundIndex++;

        }else{
            roundIndex++;
        }
        
        if(roundIndex<5){
        divResult.textContent = playRound(e.target.className, computerSelection) + '          Score : ' + myScore + ' : ' + computerScore +'.   ';}
        else{divResult.textContent = playRound(e.target.className, computerSelection) + '          Score : ' + myScore + ' : ' + computerScore +'.   ' + getWinnerFifthRound(myScore,computerScore);}


    }));

    // function game(){
    //     let score = 0;
    //     let computerScore = 0;
    //     let playerSelection;
    //     let computerSelection;
    //     for(let i=0;i<5;i++){
    //         computerSelection  = getComputerChoice();
    //         console.log(computerSelection)
    //         playerSelection =  prompt('ROCK PAPER SCISSORS ? ')
    //         if  (playRound(playerSelection,computerSelection).slice(0,1) == "D"){
                

    //         }else if(playRound(playerSelection,computerSelection).slice(4,5)=='w'){
    //             score++;
    //             console.log(playRound(playerSelection,computerSelection));
                

    //         }else{
    //             console.log(playRound(playerSelection,computerSelection));
    //             computerScore++;
    //         }
    //         console.log('You : ' + score + '   ' + 'Computer : ' + computerScore);
    //     }
        

//   game();