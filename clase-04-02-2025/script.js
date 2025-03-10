/* 
    TIPOS DE DATOS EN JAVASCRIPT
*/

//Tipo: Number (Número)
var edad = 25
var precio = 100.50
var puntos = 0

//Tipo: String (texto)
var nombre = "Valery" //Con comillas dobles
var saludo = 'Hola, ¿cómo estás?' //Con comillas simples
var character = "a" 
var edadCadena = "25"

//Tipo: Boolean (Booleano)
var esMayor = true //verdadero
var tienePermiso = false //Falso

//Tipo: Symbol (Identificador único)
var identificador1 = Symbol("id")
var identificador2 = Symbol("id")

//Tipo: BigInt (Números muy grandes)
var numeroGrande = 347485734583490584390n //Notar la "n" al final
/*
NULL, UNDEFINED Y NaN en JS
*/

//Tipo: Null (Valor No asignado)
var vacio = null

//Tipo: Undefined (Valor No asignado)
var sinDefinir 

//Tipo NaN (Not a Number - Un no número, esto pasa cuando una operación no es un número válido)
var resultadoInvalido = "Hola" * 10


/*
    ¿Qué es console log?
    console.log se usa para mostrar valores en la consola del navegador.
    Es útil para depurar y entender cómo funcionan las variables en el código.
*/

console.log(edad)
console.log(nombre)

/*
    ¿Qué es typeof?
    typeof nos permite conocer el tipo de dato de una variable 
    Es útil para depuración y validaciones de código

*/

console.log( typeof edad )
console.log( typeof edadCadena )