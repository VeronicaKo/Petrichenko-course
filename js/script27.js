"use strict";

let str = "best of the best.";
let arr = [1, 5, 4, 8, 2, 8, 4, 2];

console.log(str.length);
console.log(arr.length);

console.log(str[5]);
console.log(str.toUpperCase()); //BEST OF THE BEST.
console.log(str.indexOf("e")); //1
console.log(str.toUpperCase().indexOf("e")); //-1

const logger = "13.06.2025 12:10:12 Hello";
console.log(logger.slice(11, 20));
console.log(logger.slice(-5));
console.log(logger.substring(11));

const price = 12.2;
console.log(Math.round(price));

const priceTag = "15.2";
console.log(parseInt(priceTag));
