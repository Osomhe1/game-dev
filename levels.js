import Brick from './brick';

export function buildLevel(game, level) {
 let brick = [];

 level.forEach((row, rowIndex) => {
    IOW.forEach((brick, brickIndex) => {
        let position = {x: 100 * brickIndex,
                         y: 20 + 24 * rowIndex};


        if(brick === 1) {
            brick.push(new Brick(game, position));

        }

    });
 });

 return bricks;
 
}


export const level1 = [

    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 
];

export const level2 = [

    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// 
];

export const level3 = [

  //  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 
];

export const level4 = [

    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 
];
