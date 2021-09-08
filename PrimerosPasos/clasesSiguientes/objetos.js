var geovani = { 
    nombre:'Andres',
    apellido:'Salamanca',
    edad: 27
 }

 var julian = {
     nombre: 'julian',
     apellido:'salamanca',
     edad: 4
 }


function ImprimirEnMayusculas (persona){

    console.log( persona.nombre.toUpperCase());
}

ImprimirEnMayusculas(geovani);
ImprimirEnMayusculas(julian);



function ImprimirEdad ({edad}){
        
    console.log( edad);
}

ImprimirEdad(geovani);
ImprimirEdad(julian);

ImprimirEdad({edad:50});


// desestructurar objetos

function ImprimirEnMayusculas2 (persona){

    var {nombre}= persona; //desestructuracion 
    console.log( nombre.toUpperCase());
}

ImprimirEnMayusculas2 (julian);

function imprimirNombreyEdad(persona){
    var {nombre}  =persona;
    var {apellido} =persona;
    var {edad} =persona;

   console.log(`Hola , me llamo ${nombre} ${apellido} y tengo ${edad} años`);
 

}

imprimirNombreyEdad(geovani);
imprimirNombreyEdad(julian);
