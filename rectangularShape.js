let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let windowWidth = innerWidth;
let windowHeight = innerHeight;
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(0, 0, windowWidth, windowHeight);

ctx.fillStyle = "black";
ctx.fillRect(5, 5, 390, 390);

ctx.fillStyle = "white";
ctx.fillRect(50, 50, 300, 300);

ctx.fillStyle = "grey";
ctx.fillRect(75, 75, 250, 250);

ctx.fillStyle = "white";
ctx.fillRect(100, 100, 200, 200);
ctx.closePath();
