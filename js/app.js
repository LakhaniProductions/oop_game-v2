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
        let click = e.target;
        game.handleInteraction(click);
    }); 
}


document.addEventListener('keyup', (e)=>{
    let key= e;
    game.handleInteraction(key);
});

