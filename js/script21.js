"use strict"

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
} while (num<60);

console.log('________');

for (let index = 55; index <= num; index++) {
    console.log(index);
    if (index == 59) {
        break;
    }
    if (index == 58) {
        continue;
    }
}