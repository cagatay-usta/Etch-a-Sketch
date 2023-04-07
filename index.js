const SCREEN_SIZE = 720 * 720;
let GRID_SIZE = 8;


const container = document.querySelector('.whiteboard-container');
const grid = document.createElement('div');
grid.classList.add('grid');
grid.setAttribute('style', `height:${GRID_SIZE}px;width:${GRID_SIZE}px;`);


// draw board with adjustable grid sizes
function drawBoard(SCREEN_SIZE, GRID_SIZE) {
    for (let i = 0; i < SCREEN_SIZE / (GRID_SIZE ** 2); i++) {
        container.appendChild(grid.cloneNode());
    }
}

function clearScreen() {
    container.replaceChildren();
    drawBoard(SCREEN_SIZE, GRID_SIZE);
}

drawBoard(SCREEN_SIZE, GRID_SIZE);

let mouseDown = 0;
let colorType = "black";
document.body.onmousedown = () => {mouseDown = 1;}
document.body.onmouseup = () => {mouseDown = 0;}

function colorBlack(item) {
    item.addEventListener('mouseenter', () => {
        if (mouseDown == 1) {
            if (colorType = "black") {
                item.style.backgroundColor = `rgb(${0},${0},${0})`;
            }
            if (colorType = "rainbow") {
                item.style.backgroundColor = `rgb(${0},${0},${0})`;
            }
        };
    });
};





container.addEventListener('mousedown', (e) => {
    const grids = document.querySelectorAll('.grid');
    e.preventDefault();
    grids.forEach(colorBlack);
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearScreen);
});





