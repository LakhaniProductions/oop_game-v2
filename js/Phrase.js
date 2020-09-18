/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// Phrase.js to create a Phrase class to handle the creation of phrases.


let phraseDiv = document.querySelector('#phrase');
const phraseUl = phraseDiv.childNodes[1];
let keysAll= document.querySelectorAll('.key');

class Phrase {
    constructor(phrase){
        const lowerPhrase = phrase;
        this.phrase = lowerPhrase.toLowerCase();     
    }

    addPhraseToDisplay(){

        for(let i=0; i< this.phrase.length; i++){
            if(this.phrase.charAt(i) !== ' ') {
                const charLi= document.createElement('li');
                charLi.setAttribute('class', `hide letter ${this.phrase.charAt(i)}`);
                charLi.textContent= this.phrase.charAt(i);
                phraseUl.appendChild(charLi);
            }

            if (this.phrase.charAt(i) === ' '){
                let spaceLi= document.createElement('li');
                spaceLi.setAttribute('class', 'space');
                spaceLi.textContent= this.phrase.charAt(i);
                phraseUl.appendChild(spaceLi);
            }   
        }
    }

    checkLetter(){
        
        for (let i= 0; i < keysAll.length; i++) {
            keysAll[i].addEventListener('click', e => {

                const buttonLetter = e.target.textContent;

                if (this.phrase.includes(buttonLetter)){

                     return true;
                } else{
                    return false;
                }
            });
        }

    }
    
    showMatchedLetter(){
        
        for (let i= 0; i < keysAll.length; i++) {

            keysAll[i].addEventListener('click', e => {

                const showLetter = document.querySelectorAll('.hide');
                const buttonLetter = e.target.textContent;
                
                for (let i= 0; i < this.phrase.length; i++) {
                    if ( buttonLetter === showLetter.item(i).textContent){
                        showLetter.item(i).setAttribute('class',`show`);
                    } 
                }  
            });
        }
    }    

}





