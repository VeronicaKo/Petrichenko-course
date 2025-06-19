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
