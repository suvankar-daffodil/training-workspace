let scoreBoard, generateButton, resetButton, targetDisplay, target, noOfTries, guess;

window.onload = function () {
    scoreBoard = document.querySelector('.score-display');
    generateButton = document.querySelector('.generate-button');
    resetButton = document.querySelector('.reset-button');
    banner = document.querySelector('.banner');

    gameLaunch();
}

function gameLaunch() {
    target = Math.floor(Math.random() * 5 + 1);
    noOfTries = 3;

    resetViews();
    updateBanner();
}

function resetViews() {
    banner.style.visibility = "visible";
    scoreBoard.innerHTML = "Score Display";
    generateButton.style.display = "flex";
    resetButton.style.width = "50%";
}

let updateBanner = () => {
    banner.innerHTML = `Guess ${target} in ${noOfTries} tries to win.`;
}


let generate = () => {

    guess = Math.floor(Math.random() * 5 + 1);

    scoreBoard.innerHTML = guess;

    if (guess == target) {
        banner.innerHTML = "YOU WON!!!";
        generateButton.style.display = "none";
        resetButton.style.width = "100%";
    } else {

        noOfTries--;

        if (noOfTries == 0) {
            banner.style.visibility = "hidden";
            scoreBoard.innerHTML = "GAME OVER!"
            generateButton.style.display = "none";
            resetButton.style.width = "100%";
        } else {
            updateBanner();
        }

    }
}

let reset = () => {
    gameLaunch();
}