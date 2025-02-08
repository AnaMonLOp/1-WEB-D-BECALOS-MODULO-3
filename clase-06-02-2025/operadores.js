/* 
    Operadores de JS
    Matematicos para realizar calculos

*/

//Operadores matématicos

let suma = 5 + 3 
let resta = 6 - 2 
let multiplicacion = 4 * 7
let division = 6 / 2
let modulo = 10 % 3
let exponentes = 2 ** 3

console.log (suma, resta, multiplicacion, division, modulo, exponentes);

/* 
    Jerarquía de operadores matématicos
    1. Paréntesis ()
    2. Exponentes **
    3. Multiplicación y División
    4. Suma y Resta
*/

//Ejemplo de jerarquía
let operacion1 = 10 + 5 * 2 //10 + (5 * 2) = 20
let operacion2 = (10 + 5) * 2 
console.log (operacion1, operacion2);

//Operadores de comparación 
let mayor = 10 > 5 //Mayor que
let menor = 3 < 8 //Menor que
let igual = 5 == "5" //comparación de VALOR (true)
let estrictamenteIgual = 5 === "5" //Comparación estricta de VALOR Y TIPO DE DATO (false)
let diferente = 5 != "5" //Comparación de VALOR (false)
let estrictamenteDiferente = 5 !== "5" //Estrictamente diferente (true)

console.log(mayor, menor, igual, estrictamenteIgual, diferente, estrictamenteDiferente);

//Operadores lógicos 
let and = (10 > 5) && (3 < 8)  //true && true == TRUE
let or = (10 < 5) || (3 < 8) //true || false == true, como uno de los dos es verdadero cuenta
let not = !(10 > 5) // Not false

console.log(and, or, not);

/* 
Jerarquía de operadores lógicos
1. NOT (!) -> se evalúa primero
2. AND (&&) -> se evalúa segundo
3. OR (||) -> se evalúa al final 

Nota: Siempre se evalúa lo que haya entre paréntesis primero
*/

//Ejemplo de jerarquía de operadores lógicos 
var logico1  = true || false && false //Primero evaluó AND = true || false = true
var logico2 = (true || false) && false //true && false --> false

console.log(logico1, logico2);