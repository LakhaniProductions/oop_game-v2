/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.getRandomPhrase();
    }

    createPhrases(){
    const phrasesArray = [
        {phrase: 'Barking Up The Wrong Tree'},
        {phrase: 'Curiosity Killed The Cat'},
        {phrase: 'Back To the Drawing Board'},
        {phrase: 'Raining Cats and Dogs'},
        {phrase: 'You Cannot Judge a Book By Its Cover'}
    ]
    return (phrasesArray);
    }

    getRandomPhrase(){
        for(let i=0; i < this.phrases.length; i++){
            i = Math.floor(Math.random() * (this.phrases.length - 0) + 0);
            return this.phrases[i];
        }
    }

    startGame(){
        const overlay= document.getElementById('overlay');
        overlay.style.display='none';

        const randomPhrase = this.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase); 
        phrase.addPhraseToDisplay();

        this.activePhrase = randomPhrase;
        
        phrase.checkLetter();     
        phrase.showMatchedLetter();                
       
    }

    handleInteraction(){
        
    }

    checkForWin(){}

    removeLife(){}

    gameOver(){}
 }

