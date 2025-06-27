"use strict";

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

/*Реализовать функцию, которая принимает строку и возвращает длину самой длинной подстроки
без повторяющихся символов.*/

/*Написать функцию, которая принимает массив интервалов (каждый интервал - это массив из
двух чисел [начало, конец]) и объединяет все пересекающиеся интервалы.*/

/*Принимает начальное значение start
Возвращает объект с методами:
get() - возвращает текущее значение
increment() - увеличивает значение на 1
reset() - сбрасывает к start*/
