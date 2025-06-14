"use strict";

const obj = {
  name: "Pol",
  surname: "Right",
};

for (let key in obj) {
  console.log(`${key} - ${obj[key]}`);
}

// итерируемые
const arr = ["b", "a", "c"];
for (let el of arr) {
  console.log(el);
}

const str = "george";
for (let s of str) {
  console.log(s);
}

const salaries = {
  john: 100,
  ann: 160,
  peter: 130,
  sayHello: function () {
    console.log("Hello");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.ann,
    next() {
      if (this.current < this.last) {
        this.current += 30;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};

for (const res of salaries) {
  console.log(res);
}
