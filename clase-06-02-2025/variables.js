/*
    Diferencias entre var, let y const en JS
    -var: Se puede reasignar y redeclarar en cualquier parte del código
    -let: Se puede reasignar, pero No se puede redeclarar en el mismo ámbito
    -const: No se puede reasignar ni redeclarar; es un valor constante

*/

//VAR
var nombre = "Jonathan" //Declaramos una variable con var 
nombre = "Gilean" //Reasignamos el valor de nombre

var nombre = "Luis" //Redeclaro la varible sin problema
console.log(nombre);

//LET
let apellido = "Villanueva" //Declarando una variable con let
apellido = "Corona" //Resignamos el valor de apellido

//CONST
const gravedad = "9.81 M/s2" //Declaramos una constante con const

let numero = 10
