const windowWidth = window.innerWidth - 100,
    windowHeight = window.innerHeight - 100;

let boxElement;

let boxTop = 0,
    boxLeft = 0,
    clockwise = true,
    interval = 0;

window.onload = () => {
    boxElement = document.querySelector("#box");
    goRight();
};

function goRight() {
    let id = setInterval(() => {
        if (boxLeft < windowWidth) {
            boxLeft++;
            boxElement.style.left = boxLeft + "px";
        } else {
            clearInterval(id);
            if (clockwise)
                goDown();
            else
                goUp();
        }
    }, interval);
}

function goDown() {
    let id = setInterval(() => {
        if (boxTop < windowHeight) {
            boxTop++;
            boxElement.style.top = boxTop + "px";
        } else {
            clearInterval(id);
            if (clockwise)
                goLeft();
            else
                goRight();
        }
    }, interval);
}

function goLeft() {
    let id = setInterval(() => {
        if (boxLeft > 0) {
            boxLeft--;
            boxElement.style.left = boxLeft + "px";
        } else {
            clearInterval(id);
            if (clockwise)
                goUp();
            else {
                clockwise = true;
                goRight();
            }
        }
    }, interval);
}

function goUp() {
    let id = setInterval(() => {
        if (boxTop > 0) {
            boxTop--;
            boxElement.style.top = boxTop + "px";
        } else {
            clearInterval(id);
            if (clockwise) {
                clockwise = false;
                goDown();
            } else {
                goLeft();
            }
        }
    }, interval);
}