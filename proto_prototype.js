function Box(width, height) {
  this.width = width;
  this.height = height;
}

Box.prototype.print = function () {
  return `Box Size: ${this.width} x ${this.height}`;
};

const box1 = new Box(25, 30);
const box2 = new Box(50, 70);

console.log(box1.print()); // Box Size: 25 x 30
console.log(box2.print()); // Box Size: 50 x 70
