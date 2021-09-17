// clase1 introduccion a los arrays

var geovani = { 
    nombre:'Andres',
    apellido:'Salamanca',
    altura: 1.74
 }

 var julian = {
     nombre: 'Julian',
     apellido:'Salamanca',
     altura: 1.20
 }
 
var gabriel = { 
    nombre:'Gabriel',
    apellido:'Batistuta',
    altura: 1.85
 }

 var javier = {
     nombre: 'Javier',
     apellido:'Zanetti',
     altura: 1.78
 }


 var personas = [geovani,julian,gabriel,javier];


//  for (var i = 0;i<personas.length;i++){
//      var persona = personas[i];
//      console.log(`${persona.nombre} mide ${persona.altura} mts`)
//  }



 // clase 2 filtrar un array 


const esAlta = ({altura}) => altura >1.8;


 var personasAltas = personas.filter (esAlta);

// var personasAltas = personas.filter(function(persona){

//     return persona.altura > 1.8;
// })

 console.log (personasAltas);




