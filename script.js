const canvasSize = document.querySelector('#canvasSize');
const canvasSize2 = document.querySelector('#canvasSize2');
const divCenter = document.querySelector('.divcenter');
const btnReset = document.querySelector('#resetButton');
// const colorPicker = document.querySelector('#colorPicker');
const colorPicker = document.querySelector('#hiddencolor');
let pixels = document.querySelectorAll(".grid");
let color = colorPicker.value;
const random = document.querySelector('#randomColor');
const toggleGrid = document.querySelector('#toggleGrid');
const displaySize = document.querySelector('#gridSize');
const btnGridSize = document.querySelector('.infodisplay');

colorPicker.addEventListener('input', changeColor);
function changeColor() {
    color = colorPicker.value;
    document.querySelector(".colordisplay").style.backgroundColor = colorPicker.value;
}

btnGridSize.addEventListener('click', () => {
    canvasSize.classList.toggle("hidden");
    canvasSize2.classList.toggle("hidden");
})

toggleGrid.addEventListener('change', () => {
    pixels.forEach((e) => {
        e.classList.toggle('togglegrid')
    })
    
})

displaySize.innerText = +canvasSize.value;
displaySize.innerText = +canvasSize2.value;

random.addEventListener('click', () => {
    document.querySelector(".colordisplay").classList.toggle("rainbow");

})

// let gridSize = sizeController[0].endRotation;
let draw = 0;

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

generateGrid()
canvasSize.addEventListener('change', generateGrid);
canvasSize2.addEventListener('change', generateGrid);

function generateGrid() {
    divCenter.innerHTML = '';
    gridSize = +canvasSize.value;
    displaySize.innerText = +canvasSize.value;
    gridSize = +canvasSize2.value;
    displaySize.innerText = +canvasSize2.value;

    // gridSize = Math.round(sizeController[0].endRotation);
    divCenter.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    divCenter.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'grid togglegrid');
        divCenter.appendChild(pixel);
    }
    pixels = document.querySelectorAll(".grid");
    pixels.forEach((e) => {
        e.addEventListener('mouseenter', paint);
        e.addEventListener('mousedown', paint);   
        e.addEventListener('touchstart', paint);
        e.addEventListener('touchend', paint);
        e.addEventListener('touchcancel', paint);
        // e.addEventListener('touchmove', paint2);
    });
}



document.addEventListener('mousedown', startPainting);
document.addEventListener('mouseup', stopPainting);
function startPainting() {
    draw = 1;
}
function stopPainting() {
    draw = 0;
}


function paint(e) {
    if (draw === 1) {
        if (random.checked === true) {
            color = randomColor();
        }
        e.target.style.backgroundColor = `${color}`;
    } else if (e.type === 'mousedown') {
        if (random.checked === true) {
            // document.querySelector(".colordisplay").style.backgroundImage = "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)";
            color = randomColor();
        }
        e.target.style.backgroundColor = `${color}`;

    }
}

function paint2(e) {
    console.log(e.type);
        e.target.style.backgroundColor = `${color}`;

    }


btnReset.addEventListener('click', () => {
    pixels.forEach((e) => {
        e.style.backgroundColor = "white";
    })
})

