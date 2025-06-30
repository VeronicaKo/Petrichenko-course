"use strict";

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];
const namesLonger5 = names.filter((val) => val.length > 5);
const shortNames = names.filter(function (name) {
  return name.length < 5;
});

console.log(namesLonger5);
console.log(shortNames);

const answers = ["IvAn", "AnnA", "Hello", "pAVEL"];
const formatted = answers.map(
  (ans) => ans.substring(0, 1).toUpperCase() + ans.substring(1).toLowerCase()
);
console.log(formatted);

const some = [4, "fgh", "uikk"];
console.log(some.some((item) => typeof item == "number"));
console.log(some.every((item) => typeof item == "number"));

const arr = [4, 5, 1, 3, 2, 6];
const sum = arr.reduce((sum, current) => sum + current, 100);
console.log(sum);

const fruits = ["apple", "pear", "orange", "watermelon", "pineapple", "plum"];
const sumFruits = fruits.sort().reduce((sum, current) => `${sum}, ${current}`);
console.log(sumFruits);
