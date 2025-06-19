"use strict";

//rest
const log = function (a, b, ...c) {
  console.log(a, b, c);
};

log("sea", "mountain", "desert", "safari", "forest");

function calcOrDouble(number, basic = 2) {
  //basic = basic || 2;
  console.log(number * basic);
}

calcOrDouble(3);

// spread
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]

const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }

const nums = [5, 10, 15];
Math.max(...nums); // 15
