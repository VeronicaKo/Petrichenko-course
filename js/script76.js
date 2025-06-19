"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 199);
console.log(square.calcArea());
console.log(long.calcArea());

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super();
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyPros() {
    console.log(`Text: ${this.text}, color ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(13, 27, "Hi", "red");
div.showMyPros();

class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 80;
    this.changeToEu();
    // Object.assign(this, { src, alt, title, descr, price });
  }

  changeToEu() {
    this.price = this.price / this.transfer;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <h3>${this.title}</h3>
            <p>${this.descr}</p>
            <div>${this.price}</div>
        `;
    this.parent.append(element);
  }
}

const div2 = MenuCard(
  "img/t-shirt.jpg",
  "t-shirt",
  "T-shirt",
  "The most popular product for all type of body shapes and sizes",
  500,
  ".cards"
).render();
