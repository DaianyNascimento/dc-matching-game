const gameSplashScreen = document.querySelector(".splash-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("gameover-screen");

let w = 0;
let h = 0;
gameCards = [];

function preload() {
    //img = loadImage('../images/img.png'); images

}

function setup() {
    const canvas = createCanvas(600, 600);
    canvas.parent("game-screen"); // insert canvas in div id="game-screen"

    w = width / 4;
    h = height / 4;

    for (let x = 0; x < width; x += w) {
        for (let y = 0; y < height; y += h) {
            gameCards.push(new GameCards(x, y));
        }
    }
}

function draw() {
    background(0);
    // image(img, x, y, 70, 80);

    for (let i = 0; i < gameCards.length; i++) {
        gameCards[i].draw();
    }
}

class GameCards {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        push();
        stroke('white');
        strokeWeight(10);
        fill(4, 118, 242);
        rect(this.x, this.y, w, h);
        pop();
    }

    flipCard() {
        console.log("working");
    }

    hideCard() {

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