'use strict';

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gElcanvas;
var gcanvas;
var gColor = '#f6b73c';
var gLineWidth = 1;
var gcurrShape = 'line';
var gisDrag = false;
var gStartPos;

// window.onload = init;

function init() {
    gElcanvas = document.getElementById("my-canvas");
    gcanvas = gElcanvas.getContext('2d');
    resizeCanvas();
    addListeners();
}


function addListeners() {
    addMouseListeners();
    addTouchListeners();
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}



function addMouseListeners() {
    gElcanvas.addEventListener('mousemove', onMove)
    gElcanvas.addEventListener('mousedown', onDown)
    gElcanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElcanvas.addEventListener('touchmove', onMove)
    gElcanvas.addEventListener('touchstart', onDown)
    gElcanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    gisDrag = true;
    gStartPos = getEvePos(ev);
    document.body.style.cursor = 'grabbing';
}

function onMove(ev) {
    if (gisDrag) {
        drawShape(gStartPos.x, gStartPos.y, getEvePos(ev));
    }
}

function onUp() {
    gisDrag = false;
    document.body.style.cursor = 'grab';
}

function drawShape(xS, yS, { x, y }) {
    switch (gcurrShape) {
        case 'line':
            gStartPos = { x, y };
            drawLine(xS, yS, x, y);
            break;
        case 'circle-line':
            drawLine(xS, yS, x, y);
            break;
        case 'circle':
            drawArc(x, y);
            break
        case 'triangle':
            gStartPos = { x, y };
            gcanvas
            drawTriangle(x, y);
            break;
        case 'triangle-carzy':
            drawTriangle2(xS, yS, x, y);
            break;
        case 'rect':
            gStartPos = { x, y };
            drawRect(x, y);
            break;
        default:
            break;
    }
}


function getEvePos(ev) {
    var pos = {
        x: ev.offsetX, // offset 
        y: ev.offsetY // offset 
    }
    if (gTouchEvs.includes(ev.type)) { // if it mobile
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft, // that the pos will fit to mobile
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop // that the pos will fit to mobile
        }
    }
    return pos
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElcanvas.width = elContainer.offsetWidth - 40;
    gElcanvas.height = elContainer.offsetHeight - 100;
}

// ///////////// settings ///////////// 
function showRange(width) {
    document.querySelector('.show-range').innerText = width;
    gLineWidth = width;
}

function openToolsModal() {
    document.querySelector('.all-options-draw').classList.toggle('display');
}

function onChangeColor(color) {
    gColor = color;
}

function onChangeShape(shape) {
    gcurrShape = shape;
}

function clearCanvas() {
    gcanvas.clearRect(0, 0, gElcanvas.width, gElcanvas.height);
}

function hideModal() {
    document.querySelector('.modal-share').style.display = 'none';
}