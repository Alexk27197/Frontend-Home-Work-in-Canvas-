let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let windowWidth = innerWidth;
let windowHeight = innerHeight;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, windowWidth, windowHeight);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();
