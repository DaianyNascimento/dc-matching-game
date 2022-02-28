const gameSplashScreen = document.querySelector(".splash-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("gameover-screen");

let clickedCards = [];
let cards, backCard, table, batman, superman, joker;
let tries = 0;
let restart = false;

function preload() {
    backCard = loadImage('../images/DC_Comics_logo.png')
    bgImg = loadImage('../images/dc-comics-background.jpg');
    batman = loadImage('../images/Comics-Batman-icon.png');
    superman = loadImage('../images/Comics-Older-Superman-icon.png');
    joker = loadImage('../images/Comics-Batman-Joker-icon.png');
}

function setup() {
    const canvas = createCanvas(900, 700);
    canvas.parent("game-screen"); // insert canvas in div id="game-screen"
    cards = shuffle([10, 10, 20, 20, 30, 30])
}

function mousePressed() {

    if (clickedCards.length == 2) {
        if (cards[clickedCards[0]] == cards[clickedCards[1]] && clickedCards[0] != clickedCards[1]) {
            if (clickedCards[0] < clickedCards[1]) {
                cards.splice(clickedCards[1], 1)
                cards.splice(clickedCards[0], 1)
            } else {
                cards.splice(clickedCards[0], 1)
                cards.splice(clickedCards[1], 1)
            }

        }
        clickedCards = [];
    } else {
        for (let i = 0; i < cards.length; i++) {
            let pos = 95 + i * 70;
            //console.log(pos);
            if (mouseX >= pos && mouseX <= pos + 55 && mouseY >= 100 && mouseY <= 180) {

                if (i != clickedCards[0]) {
                    clickedCards.push(i);
                    tries += 1;
                }
            }
        }
    }

    /* function keyPressed() {
         if (keyCode == 82) {
             restart = true;
         }
     }*/
}

function draw() {
    image(bgImg, 0, 0, width, height);

    fill(255);
    textSize(25);
    textFont('Arial');
    text('Memory Game', (width / 2) - 80, 20, 200, 100);


    for (let i = 0; i < cards.length; i++) { // draws the cards 
        image(backCard, 95 + (i * 70), 100, 55, 80);
        if (clickedCards[0] == i || clickedCards[1] == i) {

            if (cards[i] == 10) {
                image(batman, 96 + (i * 70), 101, 53, 78);
            }

            if (cards[i] == 20) {
                image(superman, 96 + (i * 70), 101, 53, 78);
            }

            if (cards[i] == 30) {
                image(joker, 96 + (i * 70), 101, 53, 78);
            }
        }
    }

    text('Tries: ' + tries, 20, height - 50, 200, 100);
    textSize(15);
    text('Press "R" to restart', (width / 3) + 28, height - 50, 300, 100);

    if (restart == true) {
        // text('restart', (width / 2) - 30, (height / 2), 200, 200);
        tries = 0;
        cards = shuffle([10, 10, 20, 20, 30, 30]);
        clickedCards = []
        restart = false;
        //console.log('restart')
    }

    if (cards.length == 0) {
        /*textSize(40);
        text('Congratulations!', (width / 2) - 145, (height / 2) - 60, 200, 100);*/

        gameScreen.style.display = "none";
        gameOverScreen.style.display = "";
        tries = 0;
        cards = shuffle([10, 10, 20, 20, 30, 30]);
        clickedCards = []
    }
}

window.onload = () => {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "none";

    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    document.getElementById('restart-button').onclick = () => {
        startGame();
    };

    function startGame() {
        gameScreen.style.display = "";
        gameSplashScreen.style.display = "none";
        gameOverScreen.style.display = "none";
    }
}