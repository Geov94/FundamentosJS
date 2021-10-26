class persona {
    constructor (nombre,apellido,altura) {
        this.nombre=nombre
        this.apellido= apellido
        this.altura= altura
        }

        saludar(){
            console.log(`hola me llamo ${this.nombre} ${this.apellido}`)

        }
        soyAlto(){
            return this.altura>1.7

        }

};

class desarrollador extends persona {
    constructor (nombre,apellido,altura) {
        super(nombre,apellido,altura)
        
     
     }
     saludar(){
        console.log(`hola,me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)

     }


}







