const container = document.querySelector('.container');
createButton(document.querySelector('button'));
createGrid(16);

function createGrid(size) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');
    gridContainer.style.cssText =  `width: ${size*16}px;`;
    for(let i = 0; i < size; i ++) {
        for(let j = 0; j < size; j ++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('square');
            penHover(gridElement);
            gridContainer.appendChild(gridElement);
        }
    }
    container.appendChild(gridContainer);
}

function penHover(element) {
    element.addEventListener('mouseleave', (e) => {
        e.target.style.background = 'black';
    });
}

function createButton(element) {
    element.addEventListener('click', ()=> {
        container.innerHTML = '';
        const size = prompt('Enter Grid size');
        createGrid(size);
    });
}