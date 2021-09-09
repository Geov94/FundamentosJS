var x = 4, y = '4';

// x==y  true compara si son iguales independientemente el tipo de variable
//x===y false es una comparacion estricta,es la opcion mas recomendada


var geovani = {
    nombre: 'Geovani'
}


var clon = {
    nombre: 'Geovani'
}

//en objetos la anterior comparacion sera falsa, a menos 
//que se comparen atributos en este ejemplo :true ,o al menos que asignemos
// clon = geovani y los volvamos a comparar == o === sera true por que tienen la misma referencia en memoria
// hay que tener cuidado que dos objetos o mas ocupen el mismo espacio en memoria
//ya que si se cambio un atributo en alguno de ellos ,los demas tambien sufriran cambios
