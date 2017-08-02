	
var possibilities = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var trackUserGuesses = [];	
var computerGuess = possibilities[Math.floor(Math.random() * possibilities.length)];

var winsEl = document.getElementById('wins');
var lossesEl = document.getElementById('losses');
var userGuessEl = document.getElementById('userGuess');
var trackUserGuessesE1 = document.getElementById('trackUserGuesses');
var guessesLeftEl = document.getElementById('guessesLeft');

//set computer guess (this changes every upkeep, when moved outside function, it is nolonger being check against logic statements)

var reset = function(){
	computerGuess = possibilities[Math.floor(Math.random() * possibilities.length)];
	console.log("computer guess = " + computerGuess);
	trackUserGuesses = [];
}



var startGame = function(userGuess, computerGuess){
	console.log("computer guess = " + computerGuess);

//if userguess matches
if (userGuess == computerGuess) {
	guessesLeft = 9;
	wins++;
	console.log("wins = " + wins);
	reset();

}

//if user guess doesn't match and the user still has guesses left

if (userGuess != computerGuess && guessesLeft > 0) {

	guessesLeft--;
	console.log("guessesLeft = " + guessesLeft);
	trackUserGuesses.push(userGuess);
	console.log("All user guesses = " + trackUserGuesses);

}


//gives loss and resets guessesLeft, user guesses, and new random letter. 

else if (guessesLeft === 0){
	guessesLeft = 9;
	losses++;
	console.log("loses = " + losses);
	reset();
}


}

document.onkeyup = function(event) {
//capture user guess change to lowercase to match possibilities
	var userGuess = event.key.toLowerCase();
	console.log("user guess = " + userGuess);
	//starts game
	startGame(userGuess, computerGuess);
	trackUserGuessesE1.textContent = trackUserGuesses;
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    guessesLeftEl.textContent = guessesLeft;
    userGuessEl.textContent = userGuess;
}

