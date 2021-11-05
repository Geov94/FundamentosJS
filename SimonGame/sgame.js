const blue     = document.getElementById('blue')
const yellow   = document.getElementById('yellow')
const green    = document.getElementById('green')
const red      = document.getElementById('red')
const btnStart = document.getElementById('btnStart')


class Game {
    constructor(){
        this.start()
        this.generateSequence()
        this.nextLevel()
        // this.numberToColor()
        // this.illuminateSequence()
        // this.illuminateColor()
        // this.offColor()
    }
    start(){
        btnStart.classList.add('hide')
        this.chooseColor= this.chooseColor.bind(this)
        this.nivel= 5;
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

    nextLevel(){
        this.illuminateSequence()
        this.addEventsClick()
    }

    numberToColor(number){
        switch (number){
            case 0:
                return 'blue'
            case 1:
                return 'yellow'     
            case 2:
                return 'green'
            case 3:
                return 'red'  
        }
    }
    ColorToNumber(color){
        switch (color){
            case 'blue':
                return 0
            case 'yellow':
                return 1     
            case 'green':
                return 2
            case 'red':
                return 3  
        }
    }

    illuminateSequence(){
        for (let i=0;i<this.nivel;i++){
            const color = this.numberToColor(this.sequence[i]);
            console.log(color)
             setTimeout(()=> this.illuminateColor(color),1000*i) 

        }
      
    }

    illuminateColor(color){
        this.colors[color].classList.add('light')
        setTimeout(()=> this.offColor(color),350)
      
    }

    offColor(color){
        this.colors[color].classList.remove('light')
     
    }

    addEventsClick(){
        this.colors.blue.addEventListener('click',this.chooseColor.bind)
        this.colors.yellow.addEventListener('click',this.chooseColor)
        this.colors.green.addEventListener('click',this.chooseColor)
        this.colors.red.addEventListener('click',this.chooseColor)
    }
    chooseColor(ev){
      const nameColor   = ev.target.dataset.color;
      const numberColor = ColorToNumber(nameColor)
      

    }       
}

function startGame (){
   window.game = new Game ()
}