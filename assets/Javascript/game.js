var wins = 0;
var losses = 0;
var guesses = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function(event) {
    var userGuess = event.key;
        if (){

            if (userGuess === computerGuess) {
                wins++;
                guesses.length = 0;
            };

            else {
                guesses.push(userGuess)

                
            };
        };

    var html = 
    "<h1>Guess What Letter I'm Thinking Of </h1>" +
    "<h2>Wins: " + wins + "</h2>" +
    "<h2>Losses: " + losses + "</h2>" +
    "<h2>Guesses Left: " + + "</h2>" +
    "<h2>Guesses So Far: " + guesses + "</h2>" ;

    document.querySelector("#starting-text").innerHTML = html;

};