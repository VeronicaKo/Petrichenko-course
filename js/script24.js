"use strict"

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('ok. we are here');
console.log(num);

function calc(a, b) {
    return(a + b);
}

console.log(calc(1, 2 ));
console.log(calc(7, 11));
console.log(calc(0 ,-1));

function ret () {
    let num = 50;
    return num;
}


const logger = function() {
    console.log('function expression');
}

logger();


const sum = (a,b) => a + b;

const summ = (a,b) => { return a + b};