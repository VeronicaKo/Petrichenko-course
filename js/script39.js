"use strict";

let number = 5;
debugger;

function logNumber() {
  let number = 4;
  debugger;
  console.log(number);
}

number = 6;

logNumber();
debugger;

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter++;
    return counter;
  };

  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  for (let j = 0; j < array.length; j++) {
    let num = i + j;
  }
  console.log(num);
}
