const overlay = document.getElementById("overlay");
function resetDisplay(overlay) {
    overlay.style.display = "none";
}

let game = {};
function markButton(button) {
    button.disabled = true;
    const buttonLetter = button.innerHTML;
    game.handleInteraction(buttonLetter);
}

const startGameButton = document.getElementById("btn__reset");
startGameButton.addEventListener("click", () => {
    resetDisplay(overlay);

    // Creates a new instance of game
    game = new Game();
    game.startGame();
});

const keyboardButtons = document.querySelectorAll(".key");
for(let i = 0; i < keyboardButtons.length; i++) {
    let currentKeyBoardButton = keyboardButtons[i];
    currentKeyBoardButton.addEventListener("click", () => {
        markButton(currentKeyBoardButton);
    });
}
