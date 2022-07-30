

function getComputerChoice(){
    let valeurAleatoire = Math.floor(Math.random()*100);

    if(valeurAleatoire <= 33){
        return "Rock"
    }else if(valeurAleatoire <= 66){
        return "Paper"
    }else{
        return "Scissors"
    }
    
}

console.log(getComputerChoice())