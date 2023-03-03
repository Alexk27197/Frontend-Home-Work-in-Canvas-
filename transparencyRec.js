let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let windowWidth = innerWidth;
let windowHeight = innerHeight;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, windowWidth, windowHeight);

ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.fillRect(100, 100, 150, 150);
ctx.fillStyle = "rgba(0, 0, 255, 0.7)";
ctx.fillRect(140, 140, 150, 150);
ctx.lineWidth = 5;
ctx.closePath();
