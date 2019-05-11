class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            "oh this is awkward",
            "hold my beer",
            "thats what she said"
        ];
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(letter) {
        if(this.gamePhrase.checkLetter(letter)) {
            this.gamePhrase.showMatchedLetter(letter);
        } else {
            this.removeLife();
        }

        if(this.checkForWin()) {
            console.log("You win!");
        }
    }

    removeLife() {
        this.missed++;

        const heart = document.querySelector(".tries");
        heart.parentNode.removeChild(heart);

        if(this.missed >= 5) {
            this.gameOver();
        }
    }

    checkForWin() {
        let hiddenLetters = document.querySelectorAll(".hide");
        if(hiddenLetters.length > 0) {
            return false
        }
        return true;
    }

    gameOver() {
        console.log("Game Over");
    }

    startGame() {
        const randomPhrase = this.getRandomPhrase();
        this.gamePhrase = new Phrase(randomPhrase);
        this.gamePhrase.addPhraseToDisplay();
    }
}