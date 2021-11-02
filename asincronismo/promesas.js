const  API_URL = 'https://swapi.dev/api/';
const  PEOPLE_URL= 'people/:id';



const opts={crossDomain:true};


function obtenerPersonaje(id){
    return new Promise ((resolve,reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $
        .get(url,opts,function(data){
            resolve(data)


        })
        .fail(()=> reject(id))

    })
      
    
}

function onError(id){
    console.log(`sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(20)
  .then((personaje)=>{
      console.log(`el personaje  es  ${personaje.name}`)
      return obtenerPersonaje(21)
  })
  .then((personaje)=>{
    console.log(`el personaje  es  ${personaje.name}`)
    return obtenerPersonaje(22)
    
})
  .then((personaje)=>{
    console.log(`el personaje  es  ${personaje.name}`)
    return obtenerPersonaje(23)
})
  .then((personaje)=>{
    console.log(`el personaje  es  ${personaje.name}`)
    
})
  

  .catch(onError)







  
