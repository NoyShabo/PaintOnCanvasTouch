'use strict';

function drawTriangle(x, y) {
    gcanvas.beginPath();
    gcanvas.lineWidth = gLineWidth;
    gcanvas.moveTo(x, y - 50);
    gcanvas.lineTo(x - 50, y + 50);
    gcanvas.lineTo(x + 50, y + 50);
    gcanvas.closePath();
    gcanvas.fillStyle = gColor;
    gcanvas.fill();
    gcanvas.strokeStyle = 'black';
    gcanvas.stroke();
}

function drawRect(x, y) {
    gcanvas.beginPath();
    gcanvas.rect(x - 50, y - 50, 100, 100);
    gcanvas.lineWidth = gLineWidth;
    gcanvas.fillStyle = gColor;
    gcanvas.fillRect(x - 50, y - 50, 100, 100);
    gcanvas.strokeStyle = 'black';
    gcanvas.stroke();
}

function drawTriangle2(x, y, ys, xs) {
    gcanvas.beginPath();
    gcanvas.lineWidth = gLineWidth;
    gcanvas.moveTo(ys, xs);
    gcanvas.lineTo(x + 100, y + 100);
    gcanvas.lineTo(x - 50, y - 50);
    gcanvas.closePath();
    gcanvas.fillStyle = gColor;
    gcanvas.fill();
    gcanvas.strokeStyle = 'black';
    gcanvas.stroke();
}

// Line circle and line
function drawLine(xs, ys, xe, ye) {
    gcanvas.beginPath() //start new shape;
    gcanvas.moveTo(xs, ys); //from
    gcanvas.lineTo(xe, ye); //to
    gcanvas.lineWidth = gLineWidth;
    gcanvas.strokeStyle = gColor;
    gcanvas.stroke(); //print stroke
}

//circle
function drawArc(x, y) {
    gcanvas.beginPath();
    gcanvas.lineWidth = gLineWidth;
    gcanvas.arc(x, y, 40, 0, 2 * Math.PI);
    gcanvas.strokeStyle = 'black';
    gcanvas.stroke();
    gcanvas.fillStyle = gColor;
    gcanvas.fill();
}