// game.js

function initGameBoard() {
    const gameContainer = document.getElementById('gameBoard');
    gameContainer.innerHTML = ''; 

    const board = document.createElement('div');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(10, 40px)';
    board.style.gridTemplateRows = 'repeat(10, 40px)';
    board.style.gap = '2px';
    board.style.margin = '20px auto';
    board.style.width = 'fit-content';

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.style.width = '40px';
        cell.style.height = '40px';
        cell.style.backgroundColor = '#004080';
        cell.style.border = '1px solid #001f3d';
        board.appendChild(cell);
    }

    gameContainer.appendChild(board);

    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.onclick = goBackFromGame;
    backButton.style.marginTop = '20px';
    gameContainer.appendChild(backButton);
}

function goBackFromGame() {
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function startSolo() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'block';
    initGameBoard();
}
