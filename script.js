const buttons = document.querySelectorAll('.selections');
let btnArray=Array.from(buttons);
let playerScore=0;
let computerScore=0;
let gameWinner=document.querySelector('.game-winner');
let winnerBody=document.querySelector('.winner');
let tryAgainButton=document.createElement('button');
let buttonsWindow=document.querySelector('.playerButtons');
let roundDisplay=document.querySelector('.main-round-window');
let playerPlay=document.querySelector('.player-play');
let computerPlays=document.querySelector('.computer-play');



function computerPlay() {
	let declareComputer=document.querySelector('.computer-play');
    let randomAttack=['rock' , 'paper' , 'scissors'];

    let computerSelection=randomAttack[Math.floor(Math.random()*
		randomAttack.length)];
    
	declareComputer.textContent=(computerSelection + '!');
	return computerSelection;
}


function playRound () {	

	let computerSelection=computerPlay();
	let resultOfRound=document.querySelector('.results');

	
    if ((document.getElementById('rock').classList.contains('clicked!')) 		&& 
			(computerSelection==='rock') 		|| 

		(document.getElementById('scissors').classList.contains('clicked!')) 	&&
			(computerSelection==='scissors') 	||

		(document.getElementById('paper').classList.contains('clicked!')) 		&&
			(computerSelection==='paper')) {
			
				resultOfRound.textContent=('A tie!');
				
				return 'A tie!';
				

	} else if ((document.getElementById('rock').classList.contains('clicked!')) &&
			(computerSelection==='scissors') 	|| 

		(document.getElementById('scissors').classList.contains('clicked!')) 	&&
			(computerSelection==='paper') 		||

		(document.getElementById('paper').classList.contains('clicked!')) 		&&
			(computerSelection==='rock')) {
			
				playerScore++;
				resultOfRound.textContent=('You win the round!');
				return 'You win the round!';

    } else if ((document.getElementById('rock').classList.contains('clicked!')) &&
			(computerSelection==='paper') 		|| 

		(document.getElementById('scissors').classList.contains('clicked!')) 	&&
			(computerSelection==='rock') 		||

		(document.getElementById('paper').classList.contains('clicked!')) 		&&
			(computerSelection==='scissors')) {
			
				computerScore++
				resultOfRound.textContent=('You lose the round!');
				return 'You lose the round!';
				
	};	
}   

function declarePlay() {

	let declarePlayer=document.querySelector('.player-play');
	
	if ((document.getElementById('rock').classList.contains('clicked!'))) {
		declarePlayer.textContent='rock!';
		clipArt();
	} else if ((document.getElementById('paper').classList.contains('clicked!'))) {
		declarePlayer.textContent='paper!';
		clipArt();
	} else {
		declarePlayer.textContent='scissors!';
		clipArt();
	};
	
}

function newGame() {
	
	winnerBody.append(gameWinner);
	tryAgainButton.textContent='Try again?';
	winnerBody.append(tryAgainButton);
	tryAgainButton.addEventListener('click', () => location.reload());
	setStyle();	
}

function setStyle () {
	winnerBody.style.border='3px solid white'; 
	winnerBody.style.width='480px';
	winnerBody.style.backgroundColor='#DBF3FA';
	winnerBody.style.marginTop='20px';
	winnerBody.style.marginBottom='15px';
	tryAgainButton.style.marginBottom='10px';
	gameWinner.style.fontSize='16px';
	buttonsWindow.remove();	
	roundDisplay.remove();
}

function keepScore() {
	let roundResult=playRound()
	let runScorePlayer=document.querySelector('.player');
	let runScoreComputer=document.querySelector('.computer')
	
	if (playerScore >= 5) {
		gameWinner.textContent='Player wins the game!'
		newGame();
	} else if (computerScore >= 5) {
		gameWinner.textContent='Computer wins the game!'
		newGame();
	};

	runScorePlayer.textContent=(playerScore);
	runScoreComputer.textContent=(computerScore);
}

function clipArt() {
	if ((document.getElementById('rock').classList.contains('clicked!'))) {
		let rockPic=document.createElement("img");
		rockPic.src="./Images/rock.svg";
		playerPlay.append(rockPic);
	} else if ((document.getElementById('scissors').classList.contains('clicked!'))) {
		let scissorsPic=document.createElement("img");
		scissorsPic.src="./Images/scissors.svg";
		playerPlay.append(scissorsPic);
	} else if ((document.getElementById('paper').classList.contains('clicked!'))) {
		let paperPic=document.createElement("img");
		paperPic.src="./Images/paper.svg";
		playerPlay.append(paperPic);
	};
}


function computerClipArt() {
	
	if (computerSelection==='rock') {
		let rockCompPic=document.createElement("img");
		rockCompPic.src="./Images/rock.svg";
		computerPlays.append(rockCompPic);
	} else if (computerSelection==='scissors') {
		let scissorsCompPic=document.createElement("img");
		scissorsCompPic.src="./Images/scissors.svg";
		computerPlays.append(scissorsCompPic);
	} else if (computerSelection==='paper') {
		let paperCompPic=document.createElement("img");
		paperCompPic.src="./Images/paper.svg";
		computerPlays.append(paperCompPic);
	};
} 

function playerInput() {
	
	btnArray.forEach(button => {
		button.addEventListener('click', function handleClick (event) {
			
			button.classList.add('clicked!');

			console.log(declarePlay());
			
			console.log(keepScore());	
			
			button.classList.remove('clicked!');	

			
			}); 
		
	});
}

console.log(playerInput());