let phraseDiv = document.querySelector('#phrase');
const phraseUl = phraseDiv.childNodes[1];


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
    
    checkLetter(letter){
        
        if (this.phrase.includes(letter)){
            return true;
        } else{
           return false;
        }
    }

    showMatchedLetter(letter){

        const showLetter = document.querySelectorAll('.letter');
        
        for (let i= 0; i < showLetter.length; i++) {
            if (letter === showLetter[i].textContent){
                showLetter[i].classList.remove('hide');
                showLetter[i].classList.add('show');
            } 
        } 
        
    }        


}



