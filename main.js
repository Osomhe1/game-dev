import Paddle from './Paddle';


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 700;


ctx.clearRect(0, 0, 1000, 700);


// ctx.fillStyle = '#f00';
// ctx.fillRect(10, 5, 80, 50);

// ctx.fillStyle = '#00f';
// ctx.fillRect(100, 70, 40, 20);



let Paddle = new Paddle( GAME_WIDTH, GAME_HEIGHT);

Paddle.draw(ctx);