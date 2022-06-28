// body
const body = document.querySelector('body');

// grid size button
const btn = document.createElement('button');
btn.classList.add('resize');
btn.textContent = 'Resize Grid';
body.appendChild(btn);

// creates grid boxes
function createGrid(num) {
    const container = document.querySelector('.container');
    for (let i = 0; i < num; i++) {
        // creates row
        const row = document.createElement('div');
        row.classList.add('row');

        // fills row with num boxes
        for (let j = 0; j < num; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        // adds row to container
        container.appendChild(row);
    }
};

// create default grid of 16x16
createGrid(16);
addBtnListener();

// removes grid 
function removeGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
}


// resize grid with button
const button = document.querySelector('.resize');
button.addEventListener('click', () => {
    let num = prompt('Please enter a number between 1-100');
    // if user inputs invalid number
    if (num > 100 || num < 1) {
        alert('Invalid Number!')
        return;
    }
    removeGrid();
    createGrid(num);
    addBtnListener();
});

// adds listner to boxes
function addBtnListener() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });
    });
}

