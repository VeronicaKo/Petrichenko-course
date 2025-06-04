"use strict";

// Место для первой задачи
function calculateVolumeAndArea(cubeEdge) {
  if (!(Number.isInteger(cubeEdge) && cubeEdge >= 0)) {
    return "При вычислении произошла ошибка";
  }

  let cubeVolume = cubeEdge * cubeEdge * cubeEdge;
  let cubeArea = 6 * cubeEdge * cubeEdge;

  return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}

// Место для второй задачи
function getCoupeNumber(numberSeat) {
  if (!Number.isInteger(numberSeat)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (!(numberSeat > 0 && numberSeat < 37)) {
    return "Таких мест в вагоне не существует";
  }

  for (let coupe = 1; coupe <= 9; coupe++) {
    if (numberSeat <= coupe * 4) {
      return coupe;
    }
  }
}

// console.log(calculateVolumeAndArea(5));
// console.log(getCoupeNumber(222.2));

// Место для первой задачи
function getTimeFromMinutes(minute) {
  if (!(Number.isInteger(minute) && minute >= 0)) {
    return "Ошибка, проверьте данные";
  }

  const timeHours = Math.floor(minute / 60);
  const timeMinutes = minute - timeHours * 60;
  const strHours = timeHours.toString();

  let hoursEnd;
  switch (true) {
    case strHours.slice(-1) == "0":
      hoursEnd = "часов";
      break;
    case parseInt(strHours.slice(-2)) > 10 && parseInt(strHours.slice(-2)) < 20:
      hoursEnd = "часов";
      break;
    case parseInt(strHours.slice(-1)) > 1 && parseInt(strHours.slice(-1)) < 5:
      hoursEnd = "часа";
      break;
    case strHours.slice(-1) == "1":
      hoursEnd = "час";
      break;
    default:
      hoursEnd = "";
      break;
  }

  let time = `Это ${timeHours} ${hoursEnd} и ${timeMinutes} минут`;
  return time;
}

// console.log(getTimeFromMinutes(150)); // "Это 2 часа и 30 минут"
// console.log(getTimeFromMinutes(50)); // "Это 0 часов и 50 минут"
// console.log(getTimeFromMinutes(0)); // "Это 0 часов и 0 минут"
// console.log(getTimeFromMinutes(-150)); // "Ошибка, проверьте данные"
// console.log(getTimeFromMinutes(65)); // "Это 1 час и 5 минут"
// console.log(getTimeFromMinutes(121)); // "Это 2 часа и 1 минута"
// console.log(getTimeFromMinutes(1000)); // "Это 16 часов и 40 минут"
// console.log(getTimeFromMinutes(3.5)); // "Ошибка, проверьте данные" (дробное)
// console.log(getTimeFromMinutes("abc")); // "Ошибка, проверьте данные" (не число)

// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
  if (
    !(
      Number.isFinite(num1) &&
      Number.isFinite(num2) &&
      Number.isFinite(num3) &&
      Number.isFinite(num4)
    )
  ) {
    return 0;
  }

  return Math.max(num1, num2, num3, num4);
}

// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 5, "6", "10"));
// console.log(findMaxNumber(1, 5, Infinity, 555));
// console.log(findMaxNumber(1, null, 1, 555));
// console.log(findMaxNumber(1, "", 1, 555));

function fib(num) {
  if (!(Number.isInteger(num) && num > 0)) {
    return "";
  }

  if (num === 1) {
    return "0";
  }

  let result = [0, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result.join(" ");
}

console.log(fib(4)); // ''0 1 1 2"
console.log(fib(7)); // ''0 1 1 2 3 5 8"
console.log(fib("7")); // ''"
console.log(fib(1)); // "0"
console.log(fib(0)); // ''"
console.log(fib(3)); // ''"
console.log(fib(77)); // ''"
