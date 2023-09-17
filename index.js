const container = document.querySelector('.container');

// produce grid
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');

  row.classList.add('row');
  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');

    div.classList.add('column')

    row.appendChild(div);
  }

  container.appendChild(row);
}


const rainbowColors = [
  '#FF0000', // Red
  '#FF7F00', // Orange
  '#FFFF00', // Yellow
  '#00FF00', // Green
  '#0000FF', // Blue
  '#4B0082', // Indigo
  '#9400D3'  // Violet
];

let colorChooser = 0;
function paint(e) {
  let color = colorChooser % 7;
  e.target.style.backgroundColor = rainbowColors[color];

  colorChooser++;
}
const squares = document.querySelectorAll('.column');

squares.forEach((square) => {



  square.addEventListener('mouseover', paint)
});
