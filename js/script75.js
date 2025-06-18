"use strict";
//1
function showThis(a, b) {
  console.log(1, this);
  function sum() {
    console.log(2, this);
    return a + b; // this.a + this.b don't work
  }
  console.log(sum());
}
showThis(3, 4);

//2
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
    function shout() {
      console.log(this);
    }
    shout();
  },
};
obj.sum();

//3
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}
let ivan = User("Ivan", 23);

//4
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: "John",
};

sayName.call(user, "Smith");
sayName.apply(user, ["Smith"]);

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));

//5
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);
});

obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};

obj.sayNumber();

const du = (a) => a * 2;

//Context:
//1) Usual function: this - window, but if use strict - undefined
//2) Object's method - object
//3) In constructor and classes - new object instance
//4) Manual assignment
