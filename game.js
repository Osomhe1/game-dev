import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick'; // here also 
import Brick from './brick';

import { buildLevel, level1, level2, level3, level4 } from './levels';

const GAMESTATE = {
    PAUSED: 0,
    RUNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL = 4
};


export default class Game{

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.bricks = [];
        this.lives = 4;
        this.levels = [level1, level2, level3, level4];
        this.currentLevel = 0;

        new InputHandler(this.paddle, this);

    }

    start() {

    if(this.gamestate !== GAMESTATE.MENU ||
       this.gamestate !== GAMESTATE.NEWLEVEL
       )
        return;
   

this.brick = buildLevel(this, this.levels[this.currentLevel]);

this.ball.reset();
this.gameObjects = [this.ball, this.paddle];

this.gamestate = GAMESTATE.RUNING;

    }

   

update(deltaTime) {
   if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;


    if(this.gamestate === GAMESTATE.PAUSED || 
        this.gamestate === GAMESTATE.MENU ||
        this.gamestate === GAMESTATE.GAMEOVER)
        return;

    if(this.bricks.length === 0) {
      this.currentLevel++;
      this.gamestate = GAMESTATE.NEWLEVEL;

      this.start();
    }


    [...this.gameObjects, ...this.bricks].forEach((object) => object.update(deltaTime));


    this.bricks = this.bricks.filter(bricks => !bricks.markForDeleteion);


}

draw(ctx) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    [...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));

    if(this.gamestate == GAMESTATE.PAUSED){
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);

    }

    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    this.gameObjects.forEach((object) => object.draw(ctx));

    if(this.gamestate == GAMESTATE.PAUSED){
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press SPACEBAR To Start", this.gameWidth / 2, this.gameHeight / 2);

    }

    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    this.gameObjects.forEach((object) => object.draw(ctx));

    if(this.gamestate == GAMESTATE.GAMEOVER){
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Game Over",
    this.gameWidth / 2, 
    this.gameHeight / 2
    );

    }
    
}

togglePause() {
    if(this.gamestate == GAMESTATE.PAUSED){
         this.gamestate = GAMESTATE.RUNING;
    }else{
        this.gamestate = GAMESTATE.PAUSED;
    }
}

}