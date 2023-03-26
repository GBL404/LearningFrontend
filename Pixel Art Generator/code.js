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

let deviceType = "";

let draw = false;
let erease = false;

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

gridButton.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeight.value;i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow"); 

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erease) {
                    col.style.backgroundColor = "transparent";
                } else {
                    col.style.backgroundColor = colorButton.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY,
                ).id;
                checker(elementId);
        });

        col.addEventListener(events[deviceType].up, () => {
            draw = false;
        });
        div,appendChild(col);
    }

    container.appendChild(div);
}
});