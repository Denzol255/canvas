"use strict";
/** @type {HTMLCanvasElement} */

const canvasCirles = document.getElementById("canvas-circles"),
  ctx = canvasCirles.getContext("2d"),
  canvasPaint = document.getElementById("canvas-paint"),
  ctxPaint = canvasPaint.getContext("2d"),
  color = document.getElementById("color"),
  rangeNumber = document.getElementById("range-number"),
  range = document.getElementById("select-range");

const angle = (degrees) => (Math.PI / 180) * degrees;

const circles = () => {
  //Cиний 1
  ctx.beginPath();
  ctx.moveTo(220, 150);
  ctx.arc(150, 150, 70, 0, angle(45), true);
  ctx.lineWidth = "10";
  ctx.strokeStyle = "#0885c2";
  ctx.stroke();

  //Желтый 1
  ctx.beginPath();
  ctx.moveTo(300, 220);
  ctx.arc(230, 220, 70, 0, angle(225), false);
  ctx.strokeStyle = "#fbb132";
  ctx.stroke();

  //Красный 2
  ctx.beginPath();
  ctx.moveTo(540, 150);
  ctx.arc(470, 150, 70, 0, angle(134), true);
  ctx.strokeStyle = "#ed334e";
  ctx.stroke();

  //Зеленый 2
  ctx.beginPath();
  ctx.moveTo(460, 220);
  ctx.arc(390, 220, 70, 0, angle(135), true);
  ctx.strokeStyle = "#1c8b3c";
  ctx.stroke();

  //Черный 1
  ctx.beginPath();
  ctx.moveTo(380, 150);
  ctx.arc(310, 150, 70, 0, angle(135), true);
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  //Желтый 2
  ctx.beginPath();
  ctx.moveTo(300, 220);
  ctx.arc(230, 220, 70, 0, angle(135), true);
  ctx.strokeStyle = "#fbb132";
  ctx.stroke();

  //Cиний 2
  ctx.beginPath();
  ctx.moveTo(220, 150);
  ctx.arc(150, 150, 70, 0, angle(90), true);
  ctx.strokeStyle = "#0885c2";
  ctx.stroke();

  //Cиний 3
  ctx.beginPath();
  ctx.moveTo(220, 150);
  ctx.arc(150, 150, 70, 0, angle(46), false);

  ctx.strokeStyle = "#0885c2";
  ctx.stroke();

  //Черный 2
  ctx.beginPath();
  ctx.moveTo(380, 150);
  ctx.arc(310, 150, 70, 0, angle(136), false);
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  //Зеленый 1
  ctx.beginPath();
  ctx.moveTo(460, 220);
  ctx.arc(390, 220, 70, 0, angle(225), false);
  ctx.strokeStyle = "#1c8b3c";
  ctx.stroke();

  //Красный 1
  ctx.beginPath();
  ctx.moveTo(540, 150);
  ctx.arc(470, 150, 70, 0, angle(135), false);
  ctx.strokeStyle = "#ed334e";
  ctx.stroke();
};
circles();

const paint = () => {
  color.addEventListener("input", () => {
    ctxPaint.strokeStyle = color.value;
  });
  range.addEventListener("input", (e) => {
    rangeNumber.textContent = e.target.value;
    ctxPaint.lineWidth = e.target.value;
  });
  canvasPaint.addEventListener("mousemove", (event) => {
    const x = event.offsetX,
      y = event.offsetY,
      mx = event.movementX,
      my = event.movementY;

    if (event.buttons > 0) {
      ctxPaint.beginPath();
      ctxPaint.moveTo(x, y);
      ctxPaint.lineTo(x - mx, y - my);
      ctxPaint.stroke();
      ctxPaint.closePath();
    }
  });
};

paint();
