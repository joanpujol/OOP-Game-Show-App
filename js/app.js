let firstGame = true;

// Hides the start screen overlay
const overlay = document.getElementById("overlay");
function resetDisplay(overlay) {
    overlay.style.display = "none";
}

// disables the button on the onscreen keyboard 
// and calls the handleInteraction() method of the Game class
let game = {};
function markButton(button) {
    // In case game is instantiated and the game has started
    if(Object.keys(game).length > 0 && game.hasGameStarted()) {
        button.disabled = true;
        game.handleInteraction(button);
    }
}

// Creates a new Game object, and starts the game
const startGameButton = document.getElementById("btn__reset");
startGameButton.addEventListener("click", () => {
    resetDisplay(overlay);

    if(firstGame) {
        // Creates a new instance of game
        game = new Game();
    } else {
        game.resetGame();
    }
    game.startGame();
});

// Adds click listeners to buttons on screen
const keyboardButtons = document.querySelectorAll(".key");
for(let i = 0; i < keyboardButtons.length; i++) {
    let currentKeyBoardButton = keyboardButtons[i];
    currentKeyBoardButton.addEventListener("click", () => {
        markButton(currentKeyBoardButton);
    });
}

// Adds listener to keydown events
document.addEventListener("keydown", (event) => {
    let letter = event.key.toLowerCase();

    for(let i = 0; i < keyboardButtons.length; i++) {
        let currentKeyBoardButton = keyboardButtons[i];
        if(currentKeyBoardButton.innerHTML == letter) {
            markButton(currentKeyBoardButton);
        }
    }
});
