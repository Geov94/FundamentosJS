const blue     = document.getElementById('blue')
const yellow   = document.getElementById('yellow')
const green    = document.getElementById('green')
const red      = document.getElementById('red')
const btnStart = document.getElementById('btnStart')


class Game {
    constructor(){
        this.start()
        this.generateSequence()
    }
    start(){
        btnStart.classList.add('hide')
        this.nivel= 1;
        this.colors={
            blue,
            yellow,
            green,
            red
            
        }                 
    }
    generateSequence(){
        this.sequence =  new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
    }


    
}

function startGame (){
   window.game = new Game ()
}