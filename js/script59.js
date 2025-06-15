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
