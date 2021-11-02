class persona {
    constructor (nombre,apellido,altura) {
        this.nombre=nombre
        this.apellido= apellido
        this.altura= altura
        }

        saludar(fn){
            var {nombre,apellido} = this;
            console.log(`hola me llamo ${nombre} ${apellido}`)
            if(fn){
                fn(this.nombre,this.apellido,false)

            }

        }
        soyAlto(){
            return this.altura>1.7

        }

};

class desarrollador extends persona {
    constructor (nombre,apellido,altura) {
        super(nombre,apellido,altura)
        
     
     }
     saludar(fn){

        var {nombre,apellido} = this;
        console.log(`hola,me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(this.nombre,this.apellido,true)

        }

     }


}


function responderSaludo(nombre,apellido,esDev){
    console.log(`buen dia ${nombre} ${apellido}`)

    if (esDev){
        console.log('nos alegra que seas Desarrollador')
    }


}

var geovani = new desarrollador ('geovani','salamanca',1.72);
var julian = new persona ('julian','salamanca',1.10);
var lina = new persona ('lina','duque',1.60);

geovani.saludar(responderSaludo);
julian.saludar(responderSaludo);
lina.saludar(responderSaludo);