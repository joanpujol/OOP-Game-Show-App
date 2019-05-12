# OOP-Game-Show-App
In this project, I created a browser-based, word guessing game: "Phrase Hunter." I used JavaScript and OOP (Object Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, I created an array of phrases and created two JavaScript classes with specific properties and methods. I created a class for the game, and a phrase class to help with creating phrases.

My code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the game board displays the chosen letters on the screen.

A player continues to select letters until they guess they phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly 5 times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, my code disables that letter on the onscreen keyboard.

Finally it's also posible for the player to introduce the letters using their keyboard.
