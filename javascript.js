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

createGrid(16);