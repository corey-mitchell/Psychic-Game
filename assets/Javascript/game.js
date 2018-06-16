//setting initial variables
var wins = 0;
var losses = 0;
var lives = 10;
var guesses = [];

//limit the computer's choices and generate them randomly
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//main function
document.onkeyup = function(event) {
    //setting userGuess as keyboard input
    var userGuess = event.key;
    

        //limiting user input to alphabetic characters
        if (computerChoices.indexOf(userGuess) !== -1){
            
        
            //setting up win scenerio. If you win; wins go up by one, guesses and guesses remaing reset, and the computer guesses a new letter.
            if (userGuess === computerGuess) {
                wins++;
                guesses.length = 0;
                lives = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }

            //limits the user from being able to guess the same thing multiple times
            else if (guesses.indexOf(userGuess) !== -1){
               return;
            } 

            //adds user guesses to the guesses array and subtracts from remaining guesses
            else {
                guesses.push(userGuess);
                lives--;
            };

            //setting up loss scenerio. When lives equal zero; guesses are reset, losses go up by one, remaining guesses resets and the computer guesses a new letter.
            if (lives === 0){
                guesses.length = 0;
                losses++;
                lives = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }

        };

    //creates score board once game is started
    var html = 
    "<h1>The Psychic Game</h1>" +
    "<h2>Guess What Letter I'm Thinking Of </h2>" +
    "<h2>Wins: " + wins + "</h2>" +
    "<h2>Losses: " + losses + "</h2>" +
    "<h2>Guesses Left: " + lives + "</h2>" +
    "<h2>Your Guesses So Far: " + guesses + "</h2>" ;

    document.querySelector("#starting-text").innerHTML = html;

};
