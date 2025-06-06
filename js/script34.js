"use strict";

let a = 5,
  b = a;

b = b + 5;

//console.log(b);

const obj = {
  a: 5,
  b: 1,
};

const copy = obj; //link

copy.a = 10;

//console.log(obj);
//console.log(copy);

//поверхностная копия
function copyObject(mainObj) {
  let newObj = {};

  let key;
  for (key in mainObj) {
    newObj[key] = mainObj[key];
  }

  return newObj;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObject(numbers);

newNumbers.a = 12;
newNumbers.c.x = 11;

//console.log(newNumbers);

const add = {
  d: 18,
  e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "abracadabra";

console.log(oldArray);
console.log(newArray);

//спред оператор или оператор разворота
const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "lifejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 8];
log(...num);

const array = ["a", "b"];
const newArray = [...array];

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q };
