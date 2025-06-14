"use strict";

const shops = [{ rise: 500 }, { oil: 200 }, { bread: 50 }];

const map = new Map([[{ paper: 400 }, 8000]]);

const budget = [5000, 15000, 25000];

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

console.log(map.get(shops[0]));
console.log(map.has(shops[1]));
console.log(map);
map.delete(shops[1]);
map.clear();
console.log(map.size);

const goods = [];
for (let shop of map.keys()) {
  goods.push(Object.keys(shop)[0]);
}
console.log(goods);

for (let price of map.values()) {
  console.log(price);
}

for (let [shop, price] of map.entries()) {
  console.log(shop + "" + price);
}

map.forEach((value, key) => {
  console.log(`${value} ${key}`);
});

const users = {
  name: "John",
  surname: "Smith",
  age: 30,
  birthDate: new Date(1990, 1, 1),
  sayHi() {
    console.log(this.name);
  },
};

const userMap = new Map(Object.entries(users));
console.log(userMap);
const newUserObj = Object.fromEntries(userMap);
