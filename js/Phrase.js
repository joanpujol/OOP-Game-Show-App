class Phrase {
    constructor(phrase) {
        let phraseArray = [];
        for (let i = 0; i < phrase.length; i++) {
            phraseArray.push(phrase.charAt(i));
            
        }
        this.phrase = phraseArray;
    }

    addPhraseToDisplay() {
        // Gets phrase section on page
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

    checkLetter(letter) {
        if(this.phrase.indexOf(letter) != -1) {
            return true;
        }
        return false;
    }

    showMatchedLetter(letter) {
        let matchedLetters = document.querySelectorAll(`.${letter}`);
        for (let i = 0; i < matchedLetters.length; i++) {
            matchedLetters[i].classList.remove("hide");
            matchedLetters[i].style.color = "black";
        }
    }
}