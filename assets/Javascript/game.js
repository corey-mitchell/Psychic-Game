var wins = 0;
var losses = 0;
var lives = 10;
var guesses = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function(event) {
    var userGuess = event.key;
        // if (!inputValue >= 65 && inputValue <= 123){

            if (userGuess === computerGuess) {
                wins++;
                guesses.length = 0;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }

            // else if () {
            // }

            else {
                guesses.push(userGuess)
                lives--;
            }

            if (lives === 0){
                guesses.length = 0;
                losses++;
                lives = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }
        // }

    var html = 
    "<h1>Guess What Letter I'm Thinking Of </h1>" +
    "<h2>Wins: " + wins + "</h2>" +
    "<h2>Losses: " + losses + "</h2>" +
    "<h2>Guesses Left: " + lives + "</h2>" +
    "<h2>Guesses So Far: " + guesses + "</h2>" ;

    document.querySelector("#starting-text").innerHTML = html;

};




//questions to ask: can i limit user input down to a character set without having to do if {userGuess === "a" || etc for every letter of the alphabet}.
//is there a way to compare user input to items in an array?