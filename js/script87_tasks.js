"use strict";

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((item) => item.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
  return arr.reduce((str, film) => str + film.name + ", ", "").slice(0, -2);
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
  return arr.map((film, ind) => {
    return {
      name: film.name,
      rating: film.rating,
      id: ind,
    };
  });
}
// console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);
tranformedArray.push({
  name: "Melificenta",
  rating: 7,
});

function checkFilms(arr) {
  console.log(tranformedArray);
  return arr.every((film) => film.id >= 0);
}

console.log(checkFilms(tranformedArray));

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => sum + item.amount, 0);
};
console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  const haveNegative = data.some((item) => item.amount < 0);
  return haveNegative
    ? data.reduce((sum, item) => sum + item.amount, 0)
    : getPositiveIncomeAmount(data);
};
console.log(getTotalIncomeAmount(funds));
