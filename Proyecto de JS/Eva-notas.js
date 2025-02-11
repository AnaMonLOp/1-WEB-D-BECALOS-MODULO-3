/*
    Evaluador de Notas con Mensajes Personalizados
*/

//let nota = 0;
//let nota = 59;
//let nota = 65;
let nota = 75;
//let nota = 99;

if ( nota > 0 && nota <= 100){
    if (nota >= 90){
        console.log ("Excelente");
    }
    else if (nota >= 75){
        console.log ("Bien");
    }
    else if (nota >= 60){
        console.log ("Suficiente");
    }
    else {
        console.log ("No aprueba");
    }
}

else {
    console.log ("El rango de la nota debe de ser entre 1 - 100");
}