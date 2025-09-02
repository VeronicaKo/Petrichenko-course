'use strict';

const { x } = require('react/x-runtime');

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
console.log(parseUniqElements([5, 8, '1', 1, 2, 3, 9, 0, 0, 1, 2, 2]));

/*Написать функцию, которая принимает объект и возвращает новый объект, в котором ключи и
значения поменяны местами. Если значения не уникальны, то в качестве значения использовать
массив ключей.*/
const address1 = {
  street: 'Petrova',
  building: '12a',
  city: 'Vitebsk',
  country: 'Belarus',
  apartment: 1,
  floor: 2,
  room: 1,
  part: 1,
};

const address2 = {
  street: 'Moskovskaya',
  building: '15b',
  city: 'Frankfurt',
  country: 'Germany',
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
  let substring = '';
  let strNoRepeat = '';
  let maxLength = 0;
  for (i = 0; i < str.length; i++) {
    for (j = i; j < str.length; j++) {
      substring = str.substring(i, j);
      strNoRepeat = new Set(substring.split(''));
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
  substringWithoutRepeat('Sasha was walking on highway, and sucked bagel')
);
console.log(
  substringWithoutRepeat(
    "A Greek was driving across the river, and he saw a cancer in the river. He put the Greek's hand into the river, and the crab took his hand."
  )
);
console.log(
  substringWithoutRepeat(
    'the ships maneuvered, maneuvered, but did not break through'
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
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' },
  ])
);

/*Из массива объектов оставить только пользователей старше 18 лет:
Результат: [ { name: "Мария", age: 21 } ]*/
function getUserOlder(users) {
  return users.filter((el) => el.age >= 18);
}

console.log(
  getUserOlder([
    { name: 'Иван', age: 17 },
    { name: 'Мария', age: 21 },
  ])
);

/*Проверь, является ли строка палиндромом (например, "radar"). Игнорируй регистр и пробелы.*/
function palindrom(str) {
  const formatedStr = str.replaceAll(' ', '').toLowerCase();
  let halfLenght = Math.floor(formatedStr.length / 2);
  const left = formatedStr.substring(0, halfLenght);

  if (halfLenght != formatedStr.length / 2) {
    halfLenght++;
  }

  const right = formatedStr.substring(halfLenght).split('').reverse().join('');

  return left === right;

  // const len = formattedStr.length;
  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (formattedStr[i] !== formattedStr[len - 1 - i]) {
  //     return false;
  //   }
  // }

  // const reversedStr = formattedStr.split("").reverse().join("");
  // return formattedStr === reversedStr;
}

console.log(palindrom('radar'));
console.log(palindrom('zagar'));
console.log(palindrom('t r u u R T'));
console.log(palindrom('A man a plan a canal Panama')); // true

/*Реализуй функцию isToday(date), которая проверяет, является ли переданная дата сегодняшней.
isToday(new Date()); // true*/
function isToday(date) {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
}

console.log(isToday(new Date('2022-10-10T00:00:00.000Z')));
console.log(isToday(new Date('2025-06-27T00:00:00.000Z')));
console.log(isToday(new Date('2025-06-28T00:00:00.000Z')));

/*
Из объекта удалить поля, у которых значения null или undefined.
→ { name: "Мария", email: "test@example.com" }*/
function removeNull(obj) {
  return Object.fromEntries(Object.entries(obj).filter((el) => el[1] != null));
}

console.log(
  removeNull({
    name: 'Мария',
    age: null,
    city: undefined,
    email: 'test@example.com',
  })
);
/*Из строки получить объект { name: "ivan", age: "25" }*/
function objectFromString(str) {
  let arr = str.split('&').map((el) => el.split('='));
  return Object.fromEntries(arr);
}

console.log(objectFromString('name=ivan&age=25'));

/*Напиши функцию charCount(str), которая возвращает объект, где ключи — символы строки, значения — их количество:
charCount("aabbcc") // { a: 2, b: 2, c: 2 }*/
function charCount(str) {
  let obj = {};
  let chairSet = new Set(str);
  chairSet.forEach(
    (key) => (obj[key] = str.match(new RegExp(key, 'g')).length)
  );

  return obj;
}

function charCount(str) {
  const obj = {};

  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }

  return obj;
}

console.log(charCount('aabbcc'));
console.log(charCount('rrrrrtppppppppppppppppppppbbbss'));

/* Группировка объектов по ключу
Описание: Реализуй функцию `groupBy(arr, key)`, группирующую массив объектов по указанному полю.
groupBy([
  { id: 1, category: 'fruit' },
  { id: 2, category: 'vegetable' },
  { id: 3, category: 'fruit' }
], 'category');
-> { fruit: [...], vegetable: [...] }
*/
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const groupBy = obj[key];

    if (!acc[groupBy]) {
      acc[groupBy] = [];
    }
    acc[groupBy].push(obj);
    return acc;
  }, {});
}

console.log(
  groupBy(
    [
      { id: 1, category: 'fruit' },
      { id: 2, category: 'vegetable' },
      { id: 3, category: 'fruit' },
    ],
    'category'
  )
);

/* Поиск самого длинного слова в строке
Описание: Напиши функцию, которая возвращает самое длинное слово в строке.
longestWord("I love programming"); // "programming"
*/
function longestWord(str) {
  //return str.split(' ').sort((a, b) => b.length - a.length)[0];
  return str
    .split(' ')
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord('I love programming'));

/* Форматирование числа как валюты
Описание: Реализуй функцию, форматирующую число как строку с разделителями тысяч.
formatCurrency(1234567); // "1,234,567"
*/
function formatCurrency(num) {
  const numAsStr = String(num);
  let result = '';
  let count = 0;

  for (let i = numAsStr.length - 1; i >= 0; i--) {
    count++;
    result = numAsStr[i] + result;
    if (count % 3 === 0 && i != 0) {
      result = ',' + result;
    }
  }
  return result;

  //return new Intl.NumberFormat('en-US').format(num);
}

console.log(formatCurrency(1234567));

/* Сравнение версий (semver)
Описание: Напиши функцию, сравнивающую две строки-версии (`"1.10.2"` vs `"1.2.10"`).
compareVersions("1.10.2", "1.2.10"); // 1 (первый больше)
*/
function compareVersions(version1, version2) {
  const ver1 = version1.split('.').map(Number);
  const ver2 = version2.split('.').map(Number);
  for (let i = 0; i < ver1.length; i++) {
    if (ver1[i] > ver2[i]) {
      return version1;
    } else if (ver1[i] < ver2[i]) {
      return version2;
    }
  }
  return 'The versions are the same';
}

console.log(compareVersions('1.10.2', '1.2.10'));
console.log(compareVersions('1.10.2', '1.10.2'));

/* 🧠 10. Кэширующая обёртка вокруг функции (memoization)
Описание: Реализуй функцию `memoize(fn)`, которая запоминает результаты вызова.
const memoized = memoize((a, b) => a + b);
memoized(2, 3); // вычисляет
memoized(2, 3); // берёт из кэша
*/

function memoize(fn) {
  const cache = new Map();

  return function (a, b) {
    const key = `${a},${b}`;

    if (cache.has(key)) {
      console.log('Из кэша:', key);
      return cache.get(key);
    }

    const result = fn(a, b);
    cache.set(key, result);
    console.log('Вычислено:', key);
    return result;
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));

/*Проверка корректности скобочной последовательности
Напиши функцию, которая проверяет, является ли строка с разными типами скобок (()[]{}) корректной.
isValidBrackets("({[]})"); // true
isValidBrackets("([)]");   // false*/

function isValidBrackets(str) {
  const pairs = { '{': '}', '(': ')', '[': ']' };
  const stack = [];

  for (const char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      const lastOpen = stack.pop();
      if (pairs[lastOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets('({[]})'));
console.log(isValidBrackets('([)]'));
console.log(isValidBrackets('()[]{}'));

/*Преобразование строки в camelCase
Реализуй функцию, которая приводит строку к camelCase, игнорируя пробелы, дефисы и подчёркивания.
toCamelCase("background-color"); // "backgroundColor"
toCamelCase("my_var-name");     // "myVarName"*/

function toCamelCase(str) {
  const formated = str
    .replaceAll('_', ' ')
    .replaceAll('-', ' ')
    .split(' ')
    .filter((word) => word.length > 0);

  return formated
    .map((v, i) => (i != 0 ? v[0].toUpperCase() + v.substring(1) : v))
    .join('');
}

console.log(toCamelCase('background-color'));
console.log(toCamelCase('my_var-name'));
console.log(toCamelCase('foo--bar__baz'));

/*Подсчёт количества уникальных элементов в массиве объектов по ключу
Реализуй функцию, которая считает, сколько раз встречается каждый уникальный объект по заданному
полю.
countUniqueBy([
  { id: 1, group: 'a' },
  { id: 2, group: 'b' },
  { id: 3, group: 'a' }
], 'group');
// { a: 2, b: 1 }*/

function countUniqueBy(arr, key) {
  const result = {};
  const values = arr.map((v) => v[key]);
  values.forEach((v) =>
    result.hasOwnProperty(v) ? (result[v] = result[v] + 1) : (result[v] = 1)
  );
  return result;
}

console.log(
  countUniqueBy(
    [
      { id: 1, group: 'a' },
      { id: 2, group: 'b' },
      { id: 3, group: 'a' },
    ],
    'group'
  )
);

/*Поиск наибольшей общей подстроки (longest common substring)
Напиши функцию, которая находит самую длинную общую подстроку между двумя строками.
longestCommonSubstring("abcde", "vabcfde"); // "abc" или "de" — зависит от реализации
Сериализация и десериализация объекта без ON.stringify/parse*/

function longestCommonSubstring(str1, str2) {
  if (!str1 || !str2) return '';

  let maxLength = 0;
  let endIndex = 0;
  const dp = Array(str2.length + 1).fill(0);

  for (let i = 1; i <= str1.length; i++) {
    let prev = 0;
    for (let j = 1; j <= str2.length; j++) {
      const temp = dp[j];
      if (str1[i - 1] === str2[j - 1]) {
        dp[j] = prev + 1;
        if (dp[j] > maxLength) {
          maxLength = dp[j];
          endIndex = i - 1;
        }
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }

  return maxLength > 0
    ? str1.substring(endIndex - maxLength + 1, endIndex + 1)
    : '';
}

console.log(longestCommonSubstring('abcde', 'vabcfde')); // "abc" или "cde"
console.log(longestCommonSubstring('abcdef', 'xabydzef')); // "ef"
console.log(longestCommonSubstring('hello', 'world')); // "l"
console.log(longestCommonSubstring('', 'test')); // ""

/*Реализуй пару функций serialize(obj) и deserialize(str), которые могут сериализовать простой объект в строку и обратно
(без использования стандартных методов).
const str = serialize({ name: "Alice", age: 25 });
// например: "name=Alice;age=25"
deserialize(str); // { name: "Alice", age: 25 }*/

/*Форматирование числа как римского
Реализуй функцию, которая принимает число и возвращает его представление в виде римского.
romanize(1998); // "MCMXCVIII"*/
function romanize(num) {
  const table = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';

  for (const [value, numeral] of table) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

console.log(romanize(1998));
console.log(romanize(7));

/*Определение анаграммы
Напиши функцию, которая проверяет, являются ли две строки анаграммами (содержат одни и те же буквы в разном порядке).
isAnagram("listen", "silent"); // true
isAnagram("hello", "world");   // false*/
function isAnagram(world1, world2) {
  if (world1.length != world2.length) return false;
  if (world1.split('').sort().join('') == world2.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));

/*Транспонирование матрицы (двумерного массива)
Реализуй функцию, которая транспонирует матрицу (меняет местами строки и столбцы).
transpose([[1, 2], [3, 4], [5, 6]]);
// [[1, 3, 5], [2, 4, 6]]*/

/*Поиск самого глубокого уровня вложенности объекта
Напиши функцию, которая определяет уровень самой глубокой вложенности объекта.
getMaxDepth({ a: 1, b: { c: { d: 2 } } }); // 3*/

/*Асинхронная серийная цепочка вызовов
Реализуй функцию runPromisesInSeries(promiseFactories), которая выполняет массив функций, возвращающих промисы, строго
по очереди.
runPromisesInSeries([
  () => delay(100).then(() => console.log("A")),
  () => delay(100).then(() => console.log("B")),
]);
// Выведет A → B через 100 мс*/

/**
 * @param message - строка для проверки
 * @param bannedWords - массив запрещенных слов (например: ['политика', 'война'])
 * @returns true если есть запрещенное слово, иначе false
 */
function hasBannedWord(message, bannedWords) {
  let formattedWord = message.toLowerCase();
  return bannedWords.filter((word) => formattedWord.includes(word)).length > 0;
}

console.log(hasBannedWord('Когда Война настанет', ['политика', 'война']));
console.log(hasBannedWord('Когда ромашки расцветут', ['политика', 'война']));

function isPalindrome(str) {
  let formatedStr = str.toLowerCase().replaceAll(' ', '');
  let reversedStr = formatedStr.split('').reverse().join('');
  return formatedStr === reversedStr;
}

console.log(isPalindrome('А роза упала на лапу Азора'));
console.log(isPalindrome('JavaScript'));

//Напиши функцию, которая находит первое отсутствующее положительное число в массиве.
function firstMissingPositive(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      continue;
    }
    if (nums[i] != nums[i + 1] - 1) {
      return nums[i] + 1;
    }
  }
}

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
