let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let messageElement = document.querySelector('#message');
let PlayerO = false;
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

// Initialize the game
const initGame = () => {
    boxes.forEach((box) => {
        box.addEventListener('click', handleBoxClick);
    });

    resetBtn.addEventListener('click', resetGame);
};

// Handle box click event
const handleBoxClick = (event) => {
    if (!gameActive) return;

    const box = event.target;

    // Check if box is already filled
    if (box.innerText !== '') return;

    // Set player symbol
    if (PlayerO) {
        box.innerText = 'O';
        PlayerO = false;
    } else {
        box.innerText = 'X';
        PlayerO = true;
    }

    box.disabled = true;
    checkWinner();
};

// Check for winner or draw
const checkWinner = () => {
    let isDraw = true;

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        // Check if all boxes in pattern are filled
        if (boxes[a].innerText !== '' && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            // Display win message
            messageElement.innerText = `Player ${boxes[a].innerText} wins!`;
            gameActive = false;
            resetBtn.innerText = 'New Game';
            return true; // Stop checking other patterns
        }

        // Check if there's still an empty box
        if (boxes[a].innerText === '' || boxes[b].innerText === '' || boxes[c].innerText === '') {
            isDraw = false;
        }
    }

    // Check for draw
    if (isDraw) {
        messageElement.innerText = "It's a draw!";
        gameActive = false;
        resetBtn.innerText = 'New Game';
        return true;
    }

    return false;
};

// Reset game to initial state
const resetGame = () => {
    PlayerO = false;
    gameActive = true;
    messageElement.innerText = '';
    resetBtn.innerText = 'Reset Game';

    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
};

// Initialize the game when page loads
initGame();
