const colors = ['Blue', 'Red', 'Green', 'Yellow'];
const checkMark = document.querySelector('#checkmark');
const wrong = document.querySelector('#wrong');
const correct = document.querySelector('#correct');
const startButton = document.querySelector('#start');

let correctInt = 0;
checkMark.classList.add('no-display');
wrong.classList.add('no-display');

function checkColor(color, correctAnswer) {
    if (color == correctAnswer) {
        correctInt++;
        checkMark.classList.add('fadeaway');
    } else {
        wrong.classList.add('fadeaway');
    }

    setTimeout(function () {
        checkMark.classList.remove('fadeaway');
        wrong.classList.remove('fadeaway');
    }, 500);

    reset();
    correct.innerHTML = correctInt;
}

let color1;
let color2;

function reset() {
    let random1 = Math.floor(Math.random() * 2);

    if (random1 == 0) {
        color1 = document.querySelector('#color1');
        color2 = document.querySelector('#color2');
    } else {
        color2 = document.querySelector('#color1');
        color1 = document.querySelector('#color2');
    }

    document.querySelector('#start').style.display = 'none';

    let random = Math.floor(Math.random() * 4);
    let correctAnswer = colors[random];
    color1.innerHTML = correctAnswer;
    color2.style.color = correctAnswer;

    if (random + 1 == 4) {
        color2.innerHTML = colors[random - 3];
    } else {
        color2.innerHTML = colors[random + 1];
    }

    if (random - 1 == -1) {
        color1.style.color = colors[random + 3];
    } else {
        color1.style.color = colors[random - 1];
    }

    color1.style.display = "block";
    color2.style.display = "block";
    addClick("Blue", correctAnswer);
    addClick("Red", correctAnswer);
    addClick("Green", correctAnswer);
    addClick("Yellow", correctAnswer);
}

function addClick(color, correctAnswer) {
    //console.log(color, correctAnswer);
    let colorSpan = document.querySelector(`#${color}`);
    let onclick = `checkColor('${color}','${correctAnswer}')`;
    //console.log(onclick);
    //colorSpan.setAttribute('onclick', onclick);
    //console.log(colorSpan);
    colorSpan.onclick = function(e) {
        checkColor(color, correctAnswer);
    };
}

var countDown = 30;

function startGame() {
    setInterval(timer, 1000);
    reset();
}

function timer() {
    document.querySelector('#time').innerHTML = countDown;

    if (countDown == 0) {
        clearInterval(timer);
        alert('Game over. Score: ' + correctInt);
        location.reload();
    }
    countDown--;
}

startButton.addEventListener('click', function() {
    startGame();
});