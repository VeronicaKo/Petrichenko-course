"use strict"

let num = 50;
let stars='';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        stars+= '*';
    }
    stars += '\n';
}

console.log(stars);

first: for (let i = 0; i < 3; i++) {
    console.log('first level');
    for (let j = 0; j < 3; j++) {
        console.log('second level');
        for (let k = 0; k < 3; k++) {
            if (k===2) {
               continue first;
            }
            console.log('third level ' + k);
        }
    }
}

function firstTask() {
    let n = 5;
    while (n<11) {
        console.log(n++);
    }
}

function secondTask() {
    for (let i = 20; i > 9; i--) {
        console.log(i);
        if (i == 13) break;
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
}

// Цикл, который нужно переписать:
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i-5] = i;
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] == 'string') {
            data[i] = data[i] + ' - done';
        } else {
            data[i] = data[i]*2;
        }
    }

    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        result[data.length - i - 1] = data[i];
    }

    // Не трогаем
    return result;
}

function triangle() {
    const lines = 5;
    let result = '';
    // Проверяется именно переменная result, формируйте строку в ней
    for (let str = lines; str >= 0; str--) {
        for (let gap = 0 ; gap < str; gap ++) {
            result+= ' ';
        }

        for (let star = 0 ; star < (lines - str) * 2 + 1; star ++) {
            result+= '*';
        }
        result+='\n';
    }
    console.log(result);
}