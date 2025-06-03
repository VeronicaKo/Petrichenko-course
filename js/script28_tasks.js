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

console.log(getCoupeNumber(222.2));
