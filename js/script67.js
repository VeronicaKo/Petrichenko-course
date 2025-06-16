"use strict";
const now = new Date();
const d2017 = new Date("2017-05-05");
const d2019 = new Date(2019, 6, 10, 18, 40);
const d1972 = new Date(80000000000);
const d1938 = new Date(-999999999999);

console.log(now);
console.log(d2017);
console.log(d2019);
console.log(d1972);
console.log(d1938);

console.log("Year", now.getFullYear());
console.log("Month", now.getMonth());
console.log("Date", now.getDate());
console.log("Day", now.getDay());
console.log("Hours", now.getHours());
console.log("Minutes", now.getMinutes());
console.log("Seconds", now.getSeconds());
console.log("UTC Hours", now.getUTCHours());
console.log(now.getTimezoneOffset());
console.log("Time", now.getTime());

console.log(now.setHours(18));
console.log("Hours", now.getHours());

let start = new Date();
for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Cycle worked ${end - start} milliseconds`);
