"use strict"

let num = 50;
let stars='';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        stars+= '*';
    }
    stars += '\n';
}

console.log(stars);

first: for (let i = 0; i < 3; i++) {
    console.log('first level');
    for (let j = 0; j < 3; j++) {
        console.log('second level');
        for (let k = 0; k < 3; k++) {
            if (k===2) {
               continue first;
            }
            console.log('third level ' + k);
        }
    }
}