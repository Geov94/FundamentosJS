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

function imprimirMayoriaEdad (persona){
    if(esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es  Mayor de edad`)
    } else {
    console.log(`${persona.nombre} es Menor de edad`)
    }


}

function esMayorDeEdad(persona){

  return persona.edad >= MAYORIA_DE_EDAD;

}