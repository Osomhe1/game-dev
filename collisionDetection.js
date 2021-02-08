export function detectCollision(ball, gameObjects) {
    
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

let topOfObject = gameObject.position.y;
let leftSIdeOfObject = gameObject.position.x;
let rightSideOfObject = gameObject.position.x + gameObject.width;
let bottomOfObject = gameObject.position.y + gameObject.height;


if(bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfBall &&

    ball.position.x >= leftSIdeOfObject &&
    ball.position.x + ball.size <= rightSideOfObject) {
    return true;
    } else {
        return false;
    }
    
}