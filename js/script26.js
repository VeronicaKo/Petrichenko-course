"use strict"

// Место для первой задачи
function sayHello(name) {
    return (`Hi, ${name}`);
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return ([num - 1, num, num + 1]);
}

// Место для третьей задачи
function getMathResult(multiplier, numberMembers) {
    if (numberMembers<=0 || typeof numberMembers != 'number') return multiplier;

    let progression = '';
    for (let i = 1; i <= numberMembers; i++) {
        progression+= (multiplier * i) + ((i==numberMembers) ? '' : '---');
    }

    return progression;
}

console.log(getMathResult(20, '5'));