"use strict";

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let mallSquare = 0;
  data.shops.forEach((sh) => {
    mallSquare += sh.width * sh.length;
  });
  let mallVolume = mallSquare * data.height;
  console.log("mallSquare ", mallSquare);
  console.log("mallVolume ", mallVolume);

  const heatingCost = mallVolume * data.moneyPer1m3;
  console.log(heatingCost);

  return data.budget >= heatingCost
    ? "Бюджета достаточно"
    : "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData));

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Zlatan",
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const teamsArr = [];
  for (let i = 0; i < arr.length; i = i + 3) {
    let team = arr.slice(i, i + 3);
    teamsArr.push(team);
  }

  let remains = teamsArr[teamsArr.length - 1];
  if (remains.length == 3) {
    teamsArr.push(`Оставшиеся студенты: -`);
  } else {
    teamsArr[teamsArr.length - 1] = `Оставшиеся студенты: ${remains.join(
      ", "
    )}`;
  }

  return teamsArr;
}

console.log(sortStudentsByGroups(students));
