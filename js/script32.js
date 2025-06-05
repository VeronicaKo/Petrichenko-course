"use strict";

const arr = [12, 11, 1, 2, 3, 6, 8, 22, 101, 301, 105];

arr.pop();
arr.push(10);
arr.shift();

for (let value of arr) {
  console.log(value);
  //break;
  //continue;
}

arr.sort(function (a, b) {
  return a - b;
});

arr.forEach(function (item, index, arr) {
  console.log(`№ ${index} value: ${item} in array ${arr}`);
});

const products = prompt("What products was delivered?", "");
const productsArr = products.split(",");

console.log(productsArr);
productsArr.sort();
console.log(productsArr.join(";"));
