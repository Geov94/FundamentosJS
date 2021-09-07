//clase1
// var nombre;

var nombre = 'geovani';
var profesion = 'PROGRAMADOR';
// console.log(`hola  ${nombre} ,futuro ${profesion}`); // interpolacion de texto se llama


// tener en cuenta la debilidad a la hora de tipar variables
// "11" + 1 = 111
//"11" -1 = 10
// no se conoce el tipo especifico de la variable hasta que se declare
// por eso es recomendable usar let y const



//clase2
var nombreEnMayusculas = nombre.toUpperCase();
var nombreEnMinusculas = profesion.toLowerCase();


var primeraLetraDelNombre = nombre.charAt(0); // respeta la primera letra sea minuscula o mayuscula

var cantidad = profesion.length;

console.log(`hola  ${nombre} ,futuro ${profesion.toUpperCase()}`);

// var str = nombre.charAt(1)+ nombre.charAt(2);

var str = nombre.substr(1,2);


var ultimaLetra = nombre.charAt(nombre.length-1);