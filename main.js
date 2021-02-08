import Game from "./game";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 700;




// ctx.fillStyle = '#f00';
// ctx.fillRect(10, 5, 80, 50);

// ctx.fillStyle = '#00f';
// ctx.fillRect(100s, 70, 40, 20);



let Paddle = new Paddle( GAME_WIDTH, GAME_HEIGHT);

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

let game = new GAME(GAME_WIDTH, GAME_HEIGHT);


new InputHandler(Paddle);
// Paddle.draw(ctx);
let lastTime = 0;



function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;



    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
// Paddle.update(deltaTime);
// Paddle.draw(ctx);

game.update(deltaTime);
game.draw(ctx);


requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);
