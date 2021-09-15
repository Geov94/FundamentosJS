var geovani = {
    nombre:'Geovani',
    apellido:'Salamanca',
    edad: 27,
    ingeniero: true,
    Programador: true,
    futbolista : false ,
    helpDesk: true,
    estudiante: true,
    coches:false
  

}

var julian = {
    nombre:'Julian',
    apellido:'Salamanca',
    edad: 4,
    ingeniero: false,
    Programador: false,
    futbolista : false ,
    helpDesk: false,
    estudiante: true,
    coches: true

}


const MAYORIA_DE_EDAD = 18;
                                       // se puede asignar una funcion a una variable y funciona
function imprimirMayoriaEdad (persona){ //const imprimirMayoriaEdad = function (persona)
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es  Mayor de edad`)
    } else {
    console.log(`${persona.nombre} es Menor de edad`)
    }


}

function esMayorDeEdad(persona){

  return persona.edad >= MAYORIA_DE_EDAD;

}

//arrow function

const imprimirMayoriaEdad2 = persona =>{ //cuando tenemos un solo parametro,podemos omitir los parentesis
    if(esMayorDeEdad2(persona)) {
        console.log(`${persona.nombre} es  Mayor de edad`)
    } else {
    console.log(`${persona.nombre} es Menor de edad`)
    }


}

const esMayorDeEdad2 =persona =>  persona.edad >= MAYORIA_DE_EDAD;
  
// arrow function desestructurado
const esMayorDeEdad3 =({edad}) => edad >= MAYORIA_DE_EDAD;

    
  function permitirAcceso (persona){
      if(!esMayorDeEdad2(persona)) {
          console.log('Acceso Denegado')
      }
  }