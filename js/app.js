/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 *  app.js to create a new instance of the `Game` class and add event listeners for the start
 *  button and onscreen keyboard buttons.
 * 
 * 
*/



const button= document.getElementById('btn__reset');


button.addEventListener('click', e => {
    const game = new Game();
    game.startGame();
    game.handleInteraction();
    game.checkForWin();
    
    game.removeLife();
});



