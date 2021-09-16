var geovani = { 
    nombre:'Andres',
    apellido:'Salamanca',
    edad: 27,
    peso:95
 }

 var julian = {
     nombre: 'Julian',
     apellido:'Salamanca',
     edad: 4,
     peso:20
 }

 console.log(`al inicio del año ${geovani.nombre} pesa  ${geovani.peso} Kg`);

 const grasita = 0.2;
 

 const AumentoDePeso = persona =>  persona.peso += grasita;
 const PerdidaDePeso = persona =>  persona.peso -= grasita;
 

for (let i= 1;i<366;i++){
    let random = Math.random ();
    if (random<0.25) {
        AumentoDePeso(geovani)

    }else if (random<0.5){
        PerdidaDePeso(geovani)

    }

}

 console.log(`al final  del año ${geovani.nombre} pesa  ${geovani.peso.toFixed(2)} Kg`);


