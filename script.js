const canvasSize = document.querySelector('#canvasSize');
const divCenter = document.querySelector('.divcenter');
const btnReset = document.querySelector('#resetButton');
const colorPicker = document.querySelector('#colorPicker');
let pixels = document.querySelectorAll(".grid");
let color = colorPicker.value;
const random = document.querySelector('#randomColor');
const toggleGrid = document.querySelector('#toggleGrid');

colorPicker.addEventListener('input', changeColor);
function changeColor() {
    color = colorPicker.value;
}

toggleGrid.addEventListener('change', () => {
    pixels.forEach((e) => {
        e.classList.toggle('togglegrid')
    })
    
})


let gridSize = +canvasSize.value;
let draw = 0;

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

generateGrid()
canvasSize.addEventListener('change', generateGrid);

function generateGrid() {
    divCenter.innerHTML = '';
    gridSize = +canvasSize.value;
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