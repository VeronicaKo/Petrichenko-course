"use strict";

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    return `Мне ${plan.age} и я владею языками: ${plan.skills.languages
      .join(" ")
      .toUpperCase()}`;
  },
};

function showExperience(plan) {
  let { exp } = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  let langInfo = "";
  let { programmingLangs: languages } = plan.skills;

  for (let key in languages) {
    langInfo += `Язык ${key} изучен на ${languages[key]}\n`;
  }
  return langInfo;
}

console.log(showExperience(personalPlanPeter));

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// part 2
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  return arr.length == 0 ? "Семья пуста" : `Семья состоит из: ${arr.join(" ")}`;
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((element) => {
    console.log(element.toLowerCase());
  });
}

console.log(showFamily(family));
console.log(standardizeStrings(favoriteCities));

//part 3
const someString = "This is some strange string";

function reverse(str) {
  if (typeof str != "string") {
    return "Ошибка";
  }
  return str.split("").reverse().join("");
}

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let result = "";
  arr.forEach((el) => {
    if (el != missingCurr) {
      result += `${el}\n`;
    }
  });

  return result == 0 ? "Нет доступных валют" : `Доступные валюты:\n${result}`;
}

console.log(reverse(someString));
console.log(availableCurr(baseCurrencies.concat(additionalCurrencies), "CNY"));
