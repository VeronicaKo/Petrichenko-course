"use strict";

const box = document.getElementById("box");

console.log(box);

const btns = document.getElementsByTagName("button");

console.log(btns[2]);

const circles = document.getElementsByClassName("circle");

//new methods

const hearts = document.querySelectorAll(".heart");

hearts.forEach((item) => {
  console.log(item);
});

box.style.backgroundColor = "blue";
box.width = "500px";
btns[1].style.borderRadius = "200%";
circles[0].style.backgroundColor = "white";

box.style.cssText = "background-color: blue; width: 500px; height: 500px;";

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "green";
}

hearts.forEach((item) => {
  item.style.backgroundColor = "red";
});

const div = document.createElement("div");
const text = document.createTextNode("It was I");

div.classList.add("black");

document.body.append(div);

const wrapper = document.querySelector(".wrapper");
wrapper.append(div);
wrapper.prepend(div);
hearts[0].before(div);
hearts[0].after(div);
circles[2].remove();
circles[3].replaceWith(circles[0]);
