// IPO

// Input Process Output

// Define the inputs-Constants and State Variables

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const KEY = {
    '1' :'X',
    '-1' :'O',
    'null' : ''
};

// Things that change - turn, winner, gameboard

let turn, winner, gameboard;


// We need to cache element references

const squares = document.querySelectorAll('.squares');

// Define our process

// Add event listeners
document.querySelector('#gameboard').addEventListener('click', handleClick);
document.querySelector('#reset').addEventListener('click', init);

// This is where we start or restart our game
init(); // Call the function to start the game

function init() {
    winner = false; // We don't have a winner - starting form zero
    turn = 1;
    gameboard = [null, null, null, null, null, null, null, null, null];
}

function handleClick(evt) {
    // Assign clicked square to a variable
    console.log(evt.target.dataset.index)
}