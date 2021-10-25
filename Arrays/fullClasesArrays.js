// clase1 introduccion a los arrays

var geovani = { 
    nombre:'Andres',
    apellido:'Salamanca',
    altura: 1.74,
    cantidadDeLibros: 30
 }

 var julian = {
     nombre: 'Julian',
     apellido:'Salamanca',
     altura: 1.20,
     cantidadDeLibros: 5
 }
 
var gabriel = { 
    nombre:'Gabriel',
    apellido:'Batistuta',
    altura: 1.85,
    cantidadDeLibros: 11
 }

 var javier = {
     nombre: 'Javier',
     apellido:'Zanetti',
     altura: 1.78,
     cantidadDeLibros: 18
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

//map
const pasarAlturaAcms = persona =>({
   
        ...persona,
        altura:persona.altura*100
  
})





var personasCms = personas.map(pasarAlturaAcms)


 console.log (personasCms);


//reduce

const reducer = (acum,{cantidadDeLibros})=>  acum+cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer,0)

console.log(`en total tienen ${totalDeLibros} libros`)


