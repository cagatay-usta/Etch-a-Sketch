const SCREEN_SIZE = 720 * 720;
let GRID_SIZE = 8;


const container = document.querySelector('.whiteboard-container');
const grid = document.createElement('div');
grid.classList.add('grid');


function getRandomColor() {
    return Math.floor(Math.random() * 255);
}
// draw board with adjustable grid sizes
function drawBoard(SCREEN_SIZE, GRID_SIZE) {
    grid.setAttribute('style', `height:${GRID_SIZE}px;width:${GRID_SIZE}px;`);
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
            if (colorType == "black") {
                item.style.backgroundColor = `rgb(0,0,0)`;
            }
            if (colorType == "rainbow") {
                item.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
            };
        };
    });
};





container.addEventListener('mousedown', (e) => {
    const grids = document.querySelectorAll('.grid');
    e.preventDefault();
    grids.forEach(colorBlack);
    
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearScreen);

    const blackButton = document.querySelector('#black');
    blackButton.addEventListener('click', () => {
        colorType = "black";
    });

    const rainbowButton = document.querySelector('#rainbow');
    rainbowButton.addEventListener('click', () => {
        colorType = "rainbow";
    });

    const smallButton = document.querySelector('#small');
    smallButton.addEventListener('click', () => {
        GRID_SIZE = 8;
        clearScreen();
    });

    const mediumButton = document.querySelector('#medium');
    mediumButton.addEventListener('click', () => {
        GRID_SIZE = 16;
        clearScreen();
    });

    const bigButton = document.querySelector('#big');
    bigButton.addEventListener('click', () => {
        GRID_SIZE = 36;
        clearScreen();
    });
});





