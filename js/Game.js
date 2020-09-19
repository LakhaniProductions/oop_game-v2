/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Game.js to create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard. */

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
    return phrasesArray;
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
    }

    handleInteraction(){
        const randomPhrase = this.getRandomPhrase();
        const phrase = new Phrase(randomPhrase.phrase); 
        phrase.addPhraseToDisplay();

        this.activePhrase = randomPhrase;

        //console.log(randomPhrase, this.activePhrase, phrase)
        
        //phrase.checkLetter();     
        phrase.showMatchedLetter();     
        
        
    }

    checkForWin(){
        const phraseDiv = phrase.childNodes;
        const phraseUl = phraseDiv[1];
        const phraseLi= phraseUl.querySelectorAll('li');
        const shownLetters= document.getElementsByClassName('show');
   
      
        


        for (let i= 0; i < phraseLi.length; i++) {
            
            console.log(shownLetters,shownLetters.length);

            //const phraseClass = phraseLi[i].classList;
            
            if(shownLetters.length !== 0) {
                console.log('test');
            }

            
        }
        
      
        
    }

    removeLife(){
        
       
    }

    gameOver(){}
 }






















