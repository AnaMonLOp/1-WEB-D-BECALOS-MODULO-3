/*
  📌 EJERCICIO (OPCIONAL):
  - Predice los resultados de estas expresiones antes de ejecutarlas.
  - Explica en qué orden se ejecutan los operadores en cada caso.
*/

var a = 8, b = 4, c = 2, d = "8"; 

var resultadoEjercicio1 = a + b * c; // Resultado 16
/* 
    Por orden de jerarquía primero se hace la múltiplicación, en este caso 2*4=8 
    y después se realiza la suma -> 8 + 8 = 16
*/
var resultadoEjercicio2 = (a + b) * c; // Resultado 24
/* 
    Por orden de jerarquía primero se resuelve el paréntesis en este caso la suma (8 + 4) = 12
    y después se realiza la múltiplicación, en este caso 12 * 2 = 24
*/
var resultadoEjercicio3 = a / b + c; // Resultado 4
/* 
    Por orden de jerarquía primero se hace la división, en este caso 8 / 4 = 2 
    y después se realiza la suma -> 2 + 2 = 4
*/
var resultadoEjercicio4 = a === d || b < c; // false
/*
    Es falso ya que el operador de comparación '===' toma el valor de forma estricta y el tipo de dato no es igual
    por lo tanto es false, por otro lado, la segunda condición, de igual forma, no se cumple ya que 4 es mayor que 2
*/

var resultadoEjercicio5 = !(a > b) && (c < b); // false
/*
    En la primera condición 'a' si es mayor que 'b', sin embargo hace que true se convierta en false
   '!(true) = false'
    y en la segunda condición 'c' es menor a 'b' por lo que la condición es cierta
    Pero, cuando tenemos el operador de comparación '&&' tienen que ser las dos condiciones iguales (true)
*/

var resultadoEjercicio6 = a % c == 0 && b + c > a; // false
/*
    8 % 2 su modulo sería 0 por lo que cumple la igualdad con 0 y es verdadero
    4 + 2 = 6 por lo tanto no es mayor a 8 y no es verdadero 
    Entonces como el operador de comparación requiere que ambos valores sean verdaderos
    se puede decir que es falso.
*/

var resultadoEjercicio7 = (a - c) ** b / c; // 648
/*
    (8 - 2) es igual a 6 
    6 ** 4 es igual a 1296
    1296 / 2 = 648
*/
var resultadoEjercicio8 = a + b > c && d == a; // true
/*
    8 + 4 es igual a 12
    12 sí es mayor que dos por lo tanto, es verdadero
    "8" == 8 sí es igual por lo tanto es verdadero
    Ambas condiciones se cumplen por lo tanto es verdadero
*/
var resultadoEjercicio9 = !((a / c) > b) || (b * c <= a); // true
/*
    (8 / 2) = 4 -> 8 > 4 = true -> !(true) = false
    4 * 2 = 8 -> 8 <= 8 = true
    Una de las dos condiciones se cumple por lo tanto es true
*/
var resultadoEjercicio10 = (a % c) + (b ** c) - (a / b); // 14
/*
    (8 % 2) = 0
    (4 ** 2) = 16
    (8 / 4) = 2
    0 + 16 - 2 = 14
*/

 console.log(
   resultadoEjercicio1, resultadoEjercicio2, resultadoEjercicio3, resultadoEjercicio4, resultadoEjercicio5,
   resultadoEjercicio6, resultadoEjercicio7, resultadoEjercicio8, resultadoEjercicio9, resultadoEjercicio10
 );