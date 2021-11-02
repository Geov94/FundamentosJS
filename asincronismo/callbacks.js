const  API_URL = 'https://swapi.dev/api/';
const  PEOPLE_URL= 'people/:id';



const opts={crossDomain:true};


function obtenerPersonaje(id,cb){

    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $
    .get(url,opts,cb)
    .fail(()=> console.log(`Error 404. Personaje ${id} not found`))

}

obtenerPersonaje(5,function(personaje){
    console.log(`hola, yo soy ${personaje.name}`)
    obtenerPersonaje(3,function(personaje){
        console.log(`hola, yo soy ${personaje.name}`)
        obtenerPersonaje(84,function(personaje){
            console.log(`hola, yo soy ${personaje.name}`)
        
        });
    
    
    })
    
});




  

