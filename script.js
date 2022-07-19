

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



    function game(){
        let score = 0;
        let scoreComputer = 0;
        let playerSelection;
        let computerSelection;
        for(let i=0;i<5;i++){
            computerSelection  = getComputerChoice();
            console.log(computerSelection)
            playerSelection =  prompt('ROCK PAPER SCISSORS ? ')
            if  (playRound(playerSelection,computerSelection).slice(0,1) == "D"){
                

            }else if(playRound(playerSelection,computerSelection).slice(4,5)=='w'){
                score++;
                console.log(playRound(playerSelection,computerSelection));
                

            }else{
                console.log(playRound(playerSelection,computerSelection));
                scoreComputer++;
            }
            console.log('You : ' + score + '   ' + 'Computer : ' + scoreComputer);
        }
        if(score>scoreComputer){
            console.log('You win this game!  ' + 'You : ' + score + '   ' + 'Computer : ' + scoreComputer);
        }else if(score == scoreComputer){console.log('You make a draw!  '  + 'You : ' + score + '   ' + 'Computer : ' + scoreComputer)}
        else{
            console.log('You lose this game  ' + 'You : ' + score + '   ' + 'Computer : ' + scoreComputer);
        }
    }

  game();