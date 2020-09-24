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

document.addEventListener('keypress', (e)=>{

    let key= e;
    game.handleInteraction(key);
        
   
});

