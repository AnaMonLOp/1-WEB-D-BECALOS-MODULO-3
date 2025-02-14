//FUNCIONES EN JS

/*
    Una función es un bloque de código REUTILIZABLE que realiza una tarea en especifico
    Nos permite escribir código más organizado y evitar repetir instrucciones
*/

//Sintaxis básica de una función
//Paso 1. La definición de la función
function saludar(){
    console.log("Hola mundo!");
}

//Paso2. Llamar a la función , o la estamos ejecutando
saludar()

//Creo una función párametros y argumentos
//Los parámetros son variables que una función recibe al ser llamada
function saludaPersona(nombre){
    console.log("hola", nombre, "!");
}

//Aqui "nombre" es un parametro y "pepe" es el argumento
saludaPersona("Pepe")
saludaPersona("Benito")
saludaPersona("Lucinda")

//Si no especificamos un return, la función nos devuelve undefined
console.log("Ejecuto saludar",saludar());
console.log("Ejecuto saludarPersona()", saludaPersona("Laura"));

//Una función puede devolver un valor con "return"
function suma(num1, num2){
    return num1 + num2
}

console.log(suma(1,2));
console.log(suma(4,10));
console.log(suma(7,3));
console.log(suma("Hola","a todos"));

function resta(num1, num2){
    let resta = num1 - num2
   return resta  
}

console.log(resta(10,5));

let resultado = resta(4,9)
console.log(resultado);

function saludoMayuscula(nombre){
    function mayuscula(string){
        return string.toUpperCase()
    }
    return mayuscula(nombre)
} 

console.log(saludoMayuscula("Pepe"));
//console.log/mayuscula("hola")); Devuelve error porque mayusculas sólo vive dentro de saludoMayuscula

