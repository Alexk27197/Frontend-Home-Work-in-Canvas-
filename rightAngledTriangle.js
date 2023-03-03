let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let windowWidth = innerWidth;
let windowHeight = innerHeight;

ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(0, 0, windowWidth, windowHeight);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(20, 20);
ctx.lineTo(380, 380);
ctx.lineTo(20, 380);
ctx.lineTo(20, 20);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();
ctx.closePath();
