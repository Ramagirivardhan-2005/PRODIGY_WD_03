let P1 = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const result = document.getElementById('status');

cells.forEach(cell => {
    cell.addEventListener('click', cellClick, { once: true });
});

function cellClick(event) {
    const k = event.target.getAttribute('i');
    gameBoard[k] = P1;
    event.target.textContent = P1;
    if (checkWinner(P1)) {
        gameOver = true;
        result.textContent = `${P1} wins!`;
        return;
    }
    if (gameBoard.every(cell => cell !== '')) {
        gameOver = true;
        result.textContent = "It's a tie!";
        return;
    }
    P1 = (P1 === 'X') ? 'O' : 'X';
    result.textContent = `Player ${P1}'s turn`;
}
function checkWinner(player) {
    const winners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winners.some(combination => {
        return combination.every(index => gameBoard[index] === player);
    });
}
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    P1 = 'X';
    result.textContent = "Player X's turn";

    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', cellClick, { once: true });
    });
}
