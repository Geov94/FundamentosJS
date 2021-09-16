var geovani = { 
    nombre:'geovani',
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


 const gula = () => Math.random()< 0.3;
 const ejercicio  = () => Math.random() <0.4

 console.log(`al inicio del año ${geovani.nombre} pesa  ${geovani.peso} Kg`);

 const grasita = 0.2;
 

 const AumentoDePeso = persona =>  persona.peso += grasita;
 const PerdidaDePeso = persona =>  persona.peso -= grasita;
 const  META = geovani.peso - 3;
 var dias =0;
 
 while (geovani.peso>META){
     
     if (gula()){
         AumentoDePeso(geovani);

     }
     if(ejercicio()){
         PerdidaDePeso(geovani);

     }
     dias+=1;

 }



 console.log(`al finalizar ${dias} dias  ${geovani.nombre} logro  bajar 3 kilos y llegar a un peso de   ${geovani.peso.toFixed(2)} Kg`);