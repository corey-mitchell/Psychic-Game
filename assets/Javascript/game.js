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
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") ||(userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z") ){

            //setting up win scenerio. If you win; wins go up by one, guesses and guesses remaing reset, and the computer guesses a new letter.
            if (userGuess === computerGuess) {
                wins++;
                guesses.length = 0;
                lives = 10;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            }

            // else if (userGuess === guesses []){
            //     do nothing
            // }

            //adds user guesses to the guesses array and subtracts from remaining guesses
            else {
                guesses.push(userGuess)
                lives--;
            }

            //setting up lose scenerio. When lives equal zero; guesses are reset, losses go up by one, remaining guesses resets and computer guesses a new letter.
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
    "<h2>Guesses So Far: " + guesses + "</h2>" ;

    document.querySelector("#starting-text").innerHTML = html;

};




//questions to ask: can i limit user input down to a character set without having to do if {userGuess === "a" || etc for every letter of the alphabet}.
//is there a way to compare user input to items in an array?