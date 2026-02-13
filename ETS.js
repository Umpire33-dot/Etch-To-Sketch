const container = document.getElementById('container');

const btn = document.getElementById('reset-btn');


function createGrid(size) {
    container.innerHTML = '';

    const totalSquares = size * size;
    const squareSize = 100 / size;

for ( let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    square.addEventListener('mouseover', () =>
    {
        square.style.backgroundColor = 'green';
    });
    
    container.appendChild(square);
  }
}
createGrid(16)

btn.addEventListener('click', () => {
    let userinput = prompt("Enter your lucky number (max 100):");
    let size = parseInt(userinput);

    if ( !isNaN(size) && size > 0 && size <=100) {
        createGrid(size);
    } else {
        alert ( "Oops! Enter a number between 1 and 100.");
    }

});

