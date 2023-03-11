let container = document.querySelector(".container");
let container = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("width-range"); 
let gridWidth = document.getElementById("width-range"); 
let gridHeight = document.getElementById("height-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn"); 
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value"); 
let heightValue = document.getElementById("height-value");

let events = { 
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch {
        down: "touchstart",
        mobe: "touchmove",
        up: "touchend"
    },
}; 