/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* Game.js to create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard. */
let hiddenLetters= document.getElementsByClassName('hide');
let shownnLetters= document.getElementsByClassName('show');


let randomPhrase;
let phrase;

let heartsOl= document.querySelectorAll('li.tries');

let  overlay= document.getElementById('overlay');
let keysAll= document.querySelectorAll('.key');

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

        let i = Math.floor(Math.random() * (this.phrases.length - 0) + 0);
        return this.phrases[i];
        
    }

    startGame(){
       
        overlay.style.display='none';

        randomPhrase = this.getRandomPhrase();
        phrase = new Phrase(randomPhrase.phrase); 
        phrase.addPhraseToDisplay();

        this.activePhrase = randomPhrase;      
    }

    checkForWin(){
        if(hiddenLetters.length === 0) {
            this.gameOver('win');
        } else {
            return false;
        }


    }

    removeLife(letter){

        if(!phrase.checkLetter(letter)) {
            this.missed+=1;
        } else {
            return false;
        }

        for (let i=0; i< heartsOl.length; i++){
            let heartsLiImg= heartsOl[this.missed-1].querySelector('img');
            heartsLiImg.src ="images/lostHeart.png";
        }
        
        if(this.missed >= heartsOl.length) {
            this.gameOver('lose');
        }
    }

    handleInteraction(key){
        // KeyPress
        console.log(key);
        if(key.type === 'submit'){
                //Click

            let buttonLetter = key.textContent;
            let buttonClicked= key;
            let keyClass= buttonClicked.className;
            //phrase.checkLetter(buttonLetter);
            
            if (phrase.checkLetter(buttonLetter)){
                buttonClicked.setAttribute('class', `${keyClass} chosen`);
                buttonClicked.style.pointerEvents='none';
                
                phrase.showMatchedLetter(buttonLetter);
                game.checkForWin();
                
            } else {
                buttonClicked.setAttribute('class', `${keyClass} wrong`);
                buttonClicked.style.pointerEvents='none';
                game.removeLife(buttonLetter);
            }
           
        } else {
        



        console.log(key.type)
        let code = key.which
        if (code >= 65){
            if (phrase.checkLetter(key.key)){
                for (let i=0; i < keysAll.length; i++){
                    if(key.key === keysAll[i].textContent ){
                        keysAll[i].setAttribute('class', `${keysAll}[i] chosen`);
                        keysAll[i].style.pointerEvents='none';
                    } 
                }
    
                phrase.showMatchedLetter(key.key);
                this.checkForWin();
            } else {
                for (let i=0; i < keysAll.length; i++){
                
                    if(key.key === keysAll[i].textContent){
                        keysAll[i].setAttribute('class', `${keysAll}[i] wrong`);
                        keysAll[i].style.pointerEvents='none';
                    } 
                }

                this.removeLife(key.key);
            }
        } 
        }
        

        

        
    }

    gameOver(result){

        let message= document.getElementById('game-over-message');
        let ul= document.getElementsByTagName('ul')[0];

        if(result==='win'){
            overlay.style.display='inherit';
            overlay.setAttribute('class', result);
            message.textContent= `You've Done It! You Won!`;
            
        } else if (result==='lose') {
            overlay.style.display='inherit';
            overlay.setAttribute('class', result);
            message.textContent= `Sorry, Better Luck Next Time!`;

        } 
        
        ul.innerHTML='';

        for (let i= 0; i < keysAll.length; i++) { 
            keysAll[i].setAttribute('class', `${keysAll.textContent}`);
            keysAll[i].style.pointerEvents='';
        }

        for(let i=0; i < heartsOl.length; i++){
            const heartImg= heartsOl[i].querySelector('img');
            heartImg.src="images/liveHeart.png";
        }

       

    }
 }









/* WORKING HANDLE INTERACTION CODE */

// if (phrase.checkLetter(key.key)){
        //     for (let i=0; i < keysAll.length; i++){
        //         if(key.key === keysAll[i].textContent ){
        //             keysAll[i].setAttribute('class', `${keysAll}[i] chosen`);
        //             keysAll[i].style.pointerEvents='none';
        //         } 
        //     }

        //     phrase.showMatchedLetter(key.key);
        //     this.checkForWin();
        // } else {
        //     for (let i=0; i < keysAll.length; i++){
               
        //         if(key.key === keysAll[i].textContent){
        //             keysAll[i].setAttribute('class', `${keysAll}[i] wrong`);
        //             keysAll[i].style.pointerEvents='none';
        //         } 
        //     }
        // }







