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


function imprimirProfesiones (persona){
    console.log(`${persona.nombre} es :`)
    if (persona.ingeniero ){
    console.log('Ingeniero')
    } 
    if (persona.Programador ){
        console.log('Programador')
    } 
    if (persona.futbolista ){
        console.log('Futbolista')
    } 
    if (persona.helpDesk ){
    console.log('Soporte HelpDesk')
    }    
    if (persona.estudiante ){
        console.log('Estudiante')
    }  
    if (persona.coches ){
        console.log('Amante de los coches')
    }  
        

}


function imprimirMayoriaEdad (persona){
    if(persona.edad >17) {
        console.log(`${persona.nombre} es  Mayor de edad`)
    } else {
    console.log(`${persona.nombre} es Menor de edad`)
    }


}