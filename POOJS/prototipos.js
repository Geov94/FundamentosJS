function persona (nombre,apellido,altura) {
this.nombre=nombre
this.apellido= apellido
this.altura= altura
}

persona.prototype.saludar = function (){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function(){
    return this.altura>1.7
}

var geovani = new persona('Geovani','Salamanca',1.72);
var Lina = new persona('lina','Duque',1.60);

geovani.saludar();
Lina.saludar();

