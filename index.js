const container = document.querySelector('.container');


let colorChooser = 0;

let Colors = [
  '#FF0000', // Red
  '#FF7F00', // Orange
  '#FFFF00', // Yellow
  '#00FF00', // Green
  '#0000FF', // Blue
  '#4B0082', // Indigo
  '#9400D3'  // Violet
];


function paintRainbow(e) {
  let color = colorChooser % 7;
  e.target.style.backgroundColor = Colors[color];

  colorChooser++;
}

let gridLength = 16;
// produce grid
for (let i = 0; i < gridLength; i++) {
  const row = document.createElement('div');

  row.classList.add('row');
  for (let j = 0; j < gridLength; j++) {
    const div = document.createElement('div');

    div.classList.add('column')

    row.appendChild(div);
  }

  container.appendChild(row);
}
let squareSize = 1000 / gridLength;
console.log(squareSize);
let squares = document.querySelectorAll('.column');
squares.forEach((square) => {
  square.style.width = (`${squareSize}px`);
  square.style.height = (`${squareSize}px`);
});

let removeGrid = gridLength;

for (let i = 0; i < removeGrid; i++) {

  container.removeChild(container.firstElementChild);
}
gridLength = Number(prompt("enter a size", 16));

while (gridLength > 100) {

  gridLength = Number(prompt("enter a size", 16));

}

squareSize = 640 / gridLength;

console.log(squareSize);

for (let i = 0; i < gridLength; i++) {
  const row = document.createElement('div');

  row.classList.add('row');
  for (let j = 0; j < gridLength; j++) {
    const div = document.createElement('div');

    div.classList.add('column')

    row.appendChild(div);
  }

  container.appendChild(row);
}

squares = document.querySelectorAll('.column');
squares.forEach((square) => {
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
});
const black = document.querySelector('button.black');

const rainbow = document.querySelector('button.rainbow');

const eraser = document.querySelector('button.eraser');


black.addEventListener('click', () => {

  Colors = ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000'];
});

rainbow.addEventListener('click', () => {

  Colors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
  ];
});

eraser.addEventListener('click', () => {

  Colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
});
squares.forEach((square) => {

  square.addEventListener('mouseover', paintRainbow);
});
