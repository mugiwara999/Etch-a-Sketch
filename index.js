const container = document.querySelector('.container');

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

const squares = document.querySelectorAll('.column');

squares.forEach((square) =>


  square.addEventListener('click', function(e) {
    this.style.backgroundColor('black');
  })
)

