"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  forRemoving: true,
  makeTest: function () {
    console.log("Test");
  },
};

options.price = 58_910;

delete options.forRemoving;

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Property ${i} has a value: ${options[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has a value: ${options[key]}`);
  }
}

//console.log(Object.keys(options));

options.makeTest();

//Деструктуризация

const { border, bg } = options.colors;
