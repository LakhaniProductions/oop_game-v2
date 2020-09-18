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
        console.log(phraseLi.length);
        //console.log(phraseLi.classList.contains('hide'));
        //console.log(keysAll);
        


        for (let i= 0; i < phraseLi.length; i++) {
            
                

                const phraseClass = phraseLi[i].classList;
                const shownArray = [];
                //console.log(phraseClass[0]!== 'hide');
                console.log(phraseClass[0] === 'show');
                //console.log(shownArray);
                //console.log(phraseClass[0] !== 'hide' && phraseClass[0] !== 'space');
                
                //console.log(phraseLi[i].textContent,phraseClass[0], [i]);
                //console.log(shownArray,shownArray.length);
            
                    // if(phraseClass[0] !== 'hide' && phraseClass[0] !== 'space'){
                        
                    // } else {
                    //     shownArray.push(phraseLi);
                    //     console.log(shownArray[0].length);
                    // }
            
                


            
        }
       
      
        
    }

    removeLife(){
        
       
    }

    gameOver(){}
 }






















