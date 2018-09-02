//Alert User of Game
alert("Hello Human! Today we are gonna play a guessing game! Let's see how smart you are!");
//Want to set the choices for the computer and the wins, losses, and guesses left
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    wins = 0;
    losses = 0;
    guessesLeft = 10;
//Set up how the player can click a button
    document.onkeyup = function(event) {
        var userGuess = event.key
        var computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)]
        for (i = 0; i < 10,computerChoices++)
    }