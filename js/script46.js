"use strict";

Math.pow(2, 2);

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 0), pow(2, 1), pow(2, 2), pow(2, 3), pow(2, 4));

function powTroughRecursion(x, n) {
  if (n === 1) {
    return x;
  } else if (n <= 0) {
    return 1;
  }

  return x * powTroughRecursion(x, n - 1);
}

console.log(
  powTroughRecursion(2, 0),
  powTroughRecursion(2, 1),
  powTroughRecursion(2, 2),
  powTroughRecursion(2, 3),
  powTroughRecursion(2, 4)
);

/* Где сохраняются промежуточные результаты?
Промежуточные результаты хранятся в стеке вызовов в виде:
- Текущего значения x
- Невыполненных операций умножения
- Контекста выполнения каждой функции

Наглядное представление стека:
До раскрутки:
  pow(2,1) → возвращает 2
  pow(2,2) → ждёт результат pow(2,1) для умножения
  pow(2,3) → ждёт результат pow(2,2)
  pow(2,4) → ждёт результат pow(2,3)

После раскрутки:
  pow(2,2) → 2 * 2 = 4
  pow(2,3) → 2 * 4 = 8
  pow(2,4) → 2 * 8 = 16
*/

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],

    semi: {
      students: [
        {
          name: "Sasha",
          progress: 100,
        },
      ],
    },
  },
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;
        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  Object.values[data];

  return total / students;
}

console.log(
  "getTotalProgressByIteration",
  getTotalProgressByIteration(students)
);

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log("getTotalProgressByRecursion", result[0] / result[1]);
