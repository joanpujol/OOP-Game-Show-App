class Phrase {
    // Constructor that accepts a phrase
    constructor(phrase) {
        let phraseArray = [];
        for (let i = 0; i < phrase.length; i++) {
            phraseArray.push(phrase.charAt(i));
            
        }
        this.phrase = phraseArray;
    }

    // Shows the phrase on the gameboard
    addPhraseToDisplay() {
        const phraseSection = document.querySelector("#phrase ul");

        for (let i = 0; i < this.phrase.length; i++) {
            let letter = this.phrase[i];

            let letterListElement = document.createElement("li");

            if(letter != " ") {
                letterListElement.classList.add("hide");
                letterListElement.classList.add("letter");
                letterListElement.classList.add(letter);
            } else {
                letterListElement.classList.add("space");
            }

            letterListElement.innerHTML = letter;
            phraseSection.appendChild(letterListElement);
        }
    }

    // Removes the phrase from the gameboard
    removePhraseFromDisplay() {
        const phraseOnDisplay = document.querySelectorAll(".letter, .space");
        for (let i = 0; i < phraseOnDisplay.length; i++) {
            phraseOnDisplay[i].parentNode.removeChild(phraseOnDisplay[i]);
        }
    }

    // Checks if a letter is in the phrase
    checkLetter(letter) {
        if(this.phrase.indexOf(letter) != -1) {
            return true;
        }
        return false;
    }

    // Reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter(letter) {
        let matchedLetters = document.querySelectorAll(`.${letter}`);
        for (let i = 0; i < matchedLetters.length; i++) {
            matchedLetters[i].classList.remove("hide");
            matchedLetters[i].classList.add("show");
        }
    }
}
