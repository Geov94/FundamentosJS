let contador = 0;
var frecuencia = contador===1 ?"vez":"veces";

const lluvia = () => Math.random () <0.25;


do {
contador++;

} while (!lluvia());



if(contador==1){
console.log(`fui a ver si llovia ${contador} vez`)

}else {
    console.log(`fui a ver si llovia ${contador} ${frecuencia}`)
}