"use strict";

//To String
const num = 5;
console.log(typeof num);
console.log(typeof String(num));
console.log(typeof (5 + ""));
console.log("https://vk.com/catalog/" + 1);

const fontSize = 26 + "px";

//To Number
const str = "4";
console.log(typeof Number(str));
console.log(typeof +str);
console.log(typeof parseInt("15px"));
console.log(+prompt("Hello", ""));

//To boolean
//0, '', null, undefined, NaN = false
console.log(typeof Boolean(null));
console.log(typeof Boolean(1));
console.log(typeof !!undefined);
