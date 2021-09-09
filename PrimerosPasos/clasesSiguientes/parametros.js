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


 function cumpleanos (persona){

   return {
       ...persona,
       edad:persona.edad+1
       
   }
    
 }

