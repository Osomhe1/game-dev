import { detectCollision } from './collisionDetection';



export default class Brick{

    constructor(game, position) {
        this.image = document.getElementById('img_brick');



        this.game = game;


        
        this.position = position;
        this.width = 100 ;
        this.height = 24;

        this.markForDeletion = false;

    }

    update() {
        if(detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;

            this.markForDeletion = true;
        }

    }

    draw() {
        ctx.drawImages(
            this.image, 
            this.position.x,
             this.position.y,
              this.width,
               this.height);

    }
}