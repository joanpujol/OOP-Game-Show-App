class Game {
    // The constructor contains an array of phrases, the count of missed letters
    // and a reference to the hearts on the board
    constructor() {
        this.missed = 0;
        // Phrase only includes spaces and letters
        this.phrases = [
            "oh this is awkward",
            "hold my beer",
            "thats what she said"
        ];

        this.hearts = document.querySelectorAll(".tries");
    }

    // Randomly retrieves one phrase from the phrases array
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    // Checks player's letter selection and assess win or lose conditions
    handleInteraction(button) {
        const letter = button.innerHTML;

        if(this.gamePhrase.checkLetter(letter)) {
            button.classList.add("chosen");
            this.gamePhrase.showMatchedLetter(letter);

            // Checks if user won
            if(this.checkForWin()) {
                this.gameOver(true);
            }

        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    }

    // Removes a life from the player, updates the game board,
    // and check to see if player loses game
    removeLife() {
        this.missed++;

        if(this.missed >= 5) {
            this.gameOver(false);
            return;
        }

        this.hearts[this.missed].style.display = "none";
    }

    // Check if the player has guessed all letters in the phrase
    checkForWin() {
        let hiddenLetters = document.querySelectorAll(".hide");
        if(hiddenLetters.length > 0) {
            return false
        }
        return true;
    }

    // Displays a final win or lose message
    gameOver(didWin) {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "";

        const gameOverMessage = document.getElementById("game-over-message");
        gameOverMessage.classList.remove("win");
        gameOverMessage.classList.remove("lose");

        if(didWin) {
            gameOverMessage.classList.add("win");
            gameOverMessage.innerHTML = "You Win!";
        } else {
            gameOverMessage.classList.add("lose");
            gameOverMessage.innerHTML = "You Loose :(";
        }

        // Resets the game
        this.resetGame();
    }

    // Gets a random phrase and displays it
    startGame() {
        const randomPhrase = this.getRandomPhrase();
        this.gamePhrase = new Phrase(randomPhrase);
        this.gamePhrase.addPhraseToDisplay();
    }

    // Indicates if the game has started
    hasGameStarted() {
        if(this.gamePhrase == false) {
            return false;
        }
        return true;
    }

    // Resets the game
    resetGame() {
        this.missed = 0;
        const keyboardButtons = document.querySelectorAll(".key");
        for(let i = 0; i < keyboardButtons.length; i++) {
            let currentKeyBoardButton = keyboardButtons[i];
            currentKeyBoardButton.disabled = false;
            currentKeyBoardButton.classList.remove("chosen");
            currentKeyBoardButton.classList.remove("wrong");
        }
        
        for (let i = 0; i < this.hearts.length; i++) {
            this.hearts[i].style.display = "";
        }

        this.gamePhrase.removePhraseFromDisplay();
        this.gamePhrase = false;
    }
}
