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
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(170, 170, 12, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(240, 170);
ctx.lineTo(160, 170);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(230, 170, 12, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 200, 80, Math.PI, Math.PI * 2, Math.PI * 2);
ctx.stroke();
ctx.closePath();

// ctx.fillStyle = "black";
// ctx.fill();
