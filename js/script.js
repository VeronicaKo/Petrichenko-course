"use strict";

let candy =  5;
const leftBorderWith = 1;

candy = 45;
console.log(candy);

const object = {
    a:50
}

object.a =  10;

['pablo','petro','sara'].map( a => console.log(a) );

const sun = 500,
      moon = 10,
      earth = 1;

const COLOR_RED = '#F00';
const _colorRed = '#F00';

const humans = {
    name: 'John',
    age: 25,
    isMarried: false,
    children: {
        name: 'Joshua',
        age: 2,
        games: ['dendy', 'ball', 'doll']
    }
}

console.log(humans["name"]);
console.log(humans.age);
let isStudent = true;

humans.isStudent = isStudent;

console.log(`${humans.name} ${humans['isStudent']}`);

let pictureArray = ['plum.png', 'orange.jpg','apple.jpg',6 , {}, []]
console.log(pictureArray[2]);
pictureArray[11] = 88;
console.log(pictureArray);


