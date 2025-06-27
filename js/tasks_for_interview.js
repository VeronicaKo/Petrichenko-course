"use strict";

const { jsx } = require("react/jsx-runtime");

/*Рекурсивный обход структур
Напишите функцию deepFlatten, которая рекурсивно преобразует многомерный массив в одномерный без использования flat()/flatMap().
Пример: deepFlatten([1, [2, [3, 4], 5]]) → [1, 2, 3, 4, 5] */
function deepFlatten(multiArr) {
  const oneArr = [];

  multiArr.forEach((el) => {
    if (Array.isArray(el)) {
      oneArr.push(...deepFlatten(el));
    } else {
      oneArr.push(el);
    }
  });
  return oneArr;
}

console.log(deepFlatten([1, [2, [3, 4], 5]]));

/*Написать функцию, которая принимает массив чисел и возвращает
новый массив, содержащий только уникальные элементы, сохраняя исходный порядок.*/
function parseUniqElements(arr) {
  if (!arr.every(Number.isFinite)) {
    return [];
  }
  return Array.from(new Set(arr));
}

console.log(parseUniqElements([5, 8, 8, 1, 2, 3, 9, 0, 0, 1, 2, 2]));
console.log(parseUniqElements([5, 8, "1", 1, 2, 3, 9, 0, 0, 1, 2, 2]));

/*Написать функцию, которая принимает объект и возвращает новый объект, в котором ключи и
значения поменяны местами. Если значения не уникальны, то в качестве значения использовать
массив ключей.*/
const address1 = {
  street: "Petrova",
  building: "12a",
  city: "Vitebsk",
  country: "Belarus",
  apartment: 1,
  floor: 2,
  room: 1,
  part: 1,
};

const address2 = {
  street: "Moskovskaya",
  building: "15b",
  city: "Frankfurt",
  country: "Germany",
  apartment: 52,
  floor: 15,
  room: 3,
  part: 8,
};

function revertKeyAndValue(obj) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (result[value]) {
      result[value] = Array.isArray(result[value])
        ? [...result[value], key]
        : [result[value], key];
    } else {
      result[value] = key;
    }
  }

  return result;
}
console.log(revertKeyAndValue(address1));
console.log(revertKeyAndValue(address2));

/* Написать функцию, которая принимает число и возвращает функцию, которая при каждом
вызове возвращает число, умноженное на переданное в первый раз (реализовать через
замыкание). Затем, модифицировать: чтобы можно было сбрасывать счетчик (добавить метод
reset, который обнуляет счетчик).*/

function multiply(initialNumber) {
  let counter = 1;
  let multiplier = initialNumber;

  function inner() {
    return multiplier * counter++;
  }

  inner.reset = function () {
    counter = 1;
  };

  return inner;
}
const multiplyByTwo = multiply(2);

console.log(multiplyByTwo()); // 2 (2 * 1)
console.log(multiplyByTwo()); // 4 (2 * 2)
console.log(multiplyByTwo()); // 6 (2 * 3)

multiplyByTwo.reset();

console.log(multiplyByTwo()); // 2 (2 * 1)

/*Реализовать функцию, которая принимает строку и возвращает длину самой длинной подстроки без повторяющихся символов.*/
function substringWithoutRepeat(str) {
  let substring = "";
  let strNoRepeat = "";
  let maxLength = 0;
  for (i = 0; i < str.length; i++) {
    for (j = i; j < str.length; j++) {
      substring = str.substring(i, j);
      strNoRepeat = new Set(substring.split(""));
      if (
        substring.length == strNoRepeat.size &&
        strNoRepeat.size > maxLength
      ) {
        maxLength = substring.length;
        //console.log(substring, strNoRepeat, maxLength);
      }
    }
  }
  return maxLength;
}

console.log(
  substringWithoutRepeat("Sasha was walking on highway, and sucked bagel")
);
console.log(
  substringWithoutRepeat(
    "A Greek was driving across the river, and he saw a cancer in the river. He put the Greek's hand into the river, and the crab took his hand."
  )
);
console.log(
  substringWithoutRepeat(
    "the ships maneuvered, maneuvered, but did not break through"
  )
);

/*Написать функцию, которая принимает массив интервалов (каждый интервал - это массив из
двух чисел [начало, конец]) и объединяет все пересекающиеся интервалы.*/
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    let lastMerged = mergedIntervals[mergedIntervals.length - 1];

    if (current[0] <= lastMerged[1]) {
      mergedIntervals[mergedIntervals.length - 1] = [
        lastMerged[0],
        Math.max(lastMerged[1], current[1]),
      ];
    } else {
      mergedIntervals.push(current);
    }
  }

  return mergedIntervals;
}

console.log(
  mergeIntervals([
    [6, 10],
    [8, 12],
    [14, 20],
    [19, 22],
    [23, 25],
    [3, 6],
  ])
);

/*Принимает начальное значение start. Возвращает объект с методами:
get() - возвращает текущее значение
increment() - увеличивает значение на 1
reset() - сбрасывает к start*/
function generateObject(value) {
  let start = value;

  return {
    get: function () {
      return start;
    },
    increment: function () {
      start++;
    },
    reset: function () {
      start = value;
    },
  };
}

const gen = generateObject(5);
console.log(gen.get()); // 5
gen.increment();
console.log(gen.get()); // 6
gen.reset();
console.log(gen.get()); // 5

/*Напиши функцию getUserNames(users), которая принимает массив объектов
и возвращает массив имён: ["Иван", "Мария"].*/
function getUserNames(users) {
  let nameArray = [];
  users.forEach((el) => nameArray.push(el.name));
  return nameArray;
}

console.log(
  getUserNames([
    { id: 1, name: "Иван" },
    { id: 2, name: "Мария" },
  ])
);

/*Из массива объектов оставить только пользователей старше 18 лет:
Результат: [ { name: "Мария", age: 21 } ]*/
function getUserOlder(users) {
  return users.filter((el) => el.age >= 18);
}

console.log(
  getUserOlder([
    { name: "Иван", age: 17 },
    { name: "Мария", age: 21 },
  ])
);

/*Проверь, является ли строка палиндромом (например, "radar"). Игнорируй регистр и пробелы.*/

/*Реализуй функцию isToday(date), которая проверяет, является ли переданная дата сегодняшней.
isToday(new Date()); // true*/

/*
Из объекта удалить поля, у которых значения null или undefined.
{
  name: "Мария",
  age: null,
  city: undefined,
  email: "test@example.com"
}
 → { name: "Мария", email: "test@example.com" }*/

/*Из строки 'name=ivan&age=25' получить объект { name: "ivan", age: "25" }*/

/*Напиши функцию charCount(str), которая возвращает объект, где ключи — символы строки, значения — их количество:
charCount("aabbcc") // { a: 2, b: 2, c: 2 }*/
