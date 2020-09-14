/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */






const button= document.getElementById('btn__reset');


button.addEventListener('click', e => {
    const game = new Game();
    game.startGame();
});




