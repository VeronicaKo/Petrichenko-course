"use strict";

const arr = [1, 1, 2, 2, 4, 5, 6, 5];
const set = new Set(arr);

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(["s", "a", "l", "t", "a", "m", "r", "a", "m"]));

const students = ["Alex", "Ann", "Oleg", "Alex", "George", "Morana"];
const studentsSet = new Set(students);
studentsSet.add("Ivan").add("Ann");

studentsSet.delete("Ann");
studentsSet.has("Ann");
//studentsSet.clear();

console.log(studentsSet, studentsSet.size);

for (let st of studentsSet) {
  //console.log(st);
}

studentsSet.forEach((value, valueAgain, set) => {
  //console.log(value, valueAgain);
});

console.log(studentsSet.values());
console.log(studentsSet.keys());
console.log(studentsSet.entries());

function amountOfPages(summary) {
  let numberSum = "";
  let n = "";

  while (numberSum.length < summary) {
    n++;
    numberSum = numberSum + n;
    // console.log("numberSum = ", numberSum);
    // console.log("n = ", n);
  }
  return n;
}

console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));

function isPangram(string) {
  if (string.length < 26) return false;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  string
    .replace(" ", "")
    .split()
    .forEach((lit) => {
      if (alphabet.includes(lit.toLowerCase() == -1)) {
        return false;
      }
    });
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello world"));
