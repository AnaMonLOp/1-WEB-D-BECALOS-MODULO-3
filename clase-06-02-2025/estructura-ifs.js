/* 
    Estructura de control IF en JS
    -Permite ejecutar código solo si cumple una condición.
    -Puede usarse con operadores de comparación y lógicos.
*/

let edad = 10
let tieneINE = false 

//Condicional simple
if (edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar");
}

//Condicional con else
if (edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar");
}
else {
    console.log("Uno o más requisitos no se cumple, verifica tu información");
}


//condición if-else
if(edad < 13){
    console.log("Eres un niño");
}
else if (edad<18)
{
    console.log("Eres un adolescente");
}
else{
    console.log("Eres un adulto")
}
console.log("Fin de la ejecución");

let tieneEntrada = false
if(!tieneEntrada){
    console.log("Tienes que comprar una entrada");
}