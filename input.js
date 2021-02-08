import Game from "./game"; //problem here
import Paddle from "./Paddle"; //problem here also
import Paddle from './paddle';


export  default class InputHandler {
     

    constructor(Paddle, game) {
        document.addEventListener('keydown', (event) => {
switch(event.keyCode) {
    case 37:
       Paddle.moveLeft();

        break;

    case 39:
        Paddle.moveRight();
        break;   
        
    case 27:
      game.togglePause();

      break;

    case 32: 
      game.state();

      break;

};
        });


        document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
                case 37:
                    if (Paddle.speed < 0) Paddle.stop();
            
                    break;
            
                case 39:
                    if(Paddle.speed > 0) Paddle.stop();
                    break;    
            
            };
                    });
            

    }
}