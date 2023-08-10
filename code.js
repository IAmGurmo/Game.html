function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playCraps() {
    var die1 = getRandomNumber(1, 6);
    var die2 = getRandomNumber(1, 6);
    var sum = die1 + die2;
    var resultElement = document.getElementById("result");
    if (sum === 7 || sum === 11) {
        resultElement.innerHTML = "CRAPS – You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultElement.innerHTML = "You won!";
    } else {
        resultElement.innerHTML = "You pushed!";
    }
}
function setUpGame() {
    var playButton = document.getElementById("playButton");

    playButton.addEventListener("click", playCraps);
}
setUpGame();