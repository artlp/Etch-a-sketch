const divCenter = document.querySelector('.divcenter');
let area = divCenter.offsetHeight * divCenter.offsetWidth;
let gridSize = 32;
let pixelSize = parseInt(Math.sqrt(area / gridSize));

divCenter.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
divCenter.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`


// pixel.style.cssText = `height: ${pixelSize}px; width: ${pixelSize}px; min-width: ${pixelSize}px; min-height: ${pixelSize}px`;
for (let i = 1; i <= gridSize*gridSize; i++) {
const pixel = document.createElement('div');
pixel.setAttribute('class', 'grid');

divCenter.appendChild(pixel);
}

console.log(area, pixelSize);