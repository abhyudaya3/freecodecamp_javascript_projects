const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let computerChoice1;
let userChoice1;
let result1;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice1 = e.target.id;
    userChoiceDisplay.innerHTML = userChoice1;
    generateComputerChoice();
    getResult();

}));

function generateComputerChoice(){
    // choosing a number from 1 to 3 both included
    let numb = (Math.floor(Math.random() * 3)) + 1;

    if(numb === 1){
        computerChoice1 = 'Rock';

    }
    else if(numb === 2){
        computerChoice1 = 'Paper';
    }
    else{
        computerChoice1 = 'Scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice1;
}

function getResult(){
    if(userChoice1 === computerChoice1){
        result1 = `It's a draw!!!!`
    }

    else if(computerChoice1 === 'Rock' && userChoice1 === 'Paper'){
        result1 = 'You Win';
    }

    else if(computerChoice1 === 'Rock' && userChoice1 === 'Scissor'){
        result1 = 'You Lost';
    }

    else if(computerChoice1 === 'Scissor' && userChoice1 === 'Paper'){
        result1 = 'You Lost';
    }

    else if(computerChoice1 === 'Scissor' && userChoice1 === 'Rock'){
        result1 = 'You Win';
    }

    else if(computerChoice1 === 'Paper' && userChoice1 === 'Rock'){
        result1 = 'You Lost';
    }

    else if(computerChoice1 === 'Paper' && userChoice1 === 'Scissor'){
        result1 = 'You Win';
    }

    resultDisplay.innerHTML = result1;
    
}
