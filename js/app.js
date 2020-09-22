/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 *  app.js to create a new instance of the `Game` class and add event listeners for the start
 *  button and onscreen keyboard buttons.
 * 
 * 
*/

let game;


const button= document.getElementById('btn__reset');



button.addEventListener('click', e => {
    game = new Game();
    
    game.startGame();
});

for (let i= 0; i < keysAll.length; i++) {
    
    keysAll[i].addEventListener('click', e => {
        
        let buttonLetter = e.target.textContent;
        let buttonClicked= e.target;
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
    }); 
}


document.addEventListener('keypress', (e)=>{
    
    let keyLetter = e.key;
    let keyEvent= e;

    game.handleInteraction(keyLEvent);

    
    game.removeLife(keyLetter);

    
    

});

