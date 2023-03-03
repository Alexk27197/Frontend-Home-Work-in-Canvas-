let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let windowWidth = innerWidth;
let windowHeight = innerHeight;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, windowWidth, windowHeight);

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(context, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.closePath();
  }
}

let arr = ["white", "#e5e5e5", "#adb5bd", "#495057", "#343a40", "black"];
let x = 0;
let y = 0;
let radius = 20;
let myCircle;
for (let i = 0; i < arr.length; i++) {
  x += 60;
  y += 60;
  myCircle = new Circle(x, y, radius, Math.PI * 2);
  myCircle.draw(ctx, arr[i]);
}
