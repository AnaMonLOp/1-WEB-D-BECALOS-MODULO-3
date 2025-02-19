/*
    Clasificación de frutas según su tipo 
    y cuentas cuántas hay de cada tipo.
*/


// ¡Nuestro arreglo de frutas! :)

let frutas = ["manzana", "plátano", "manzana", "naranja", "plátano", "uva"];

// CICLO FOR
console.log ("Mostramos el tipo de frutas con un ciclo for");

let contador = {}; // Objeto para almacenar la cantidad de cada fruta

for (let i=0; i<frutas.length; i++){
    let fruta = frutas[i]; //Para contener la fruta que se encuentra en la posición i

    // Si la fruta aún no está en el contador, la inicializamos en 1
    if(contador[fruta] === undefined) {
        contador[fruta] = 1; 
    }

    //Si ya está inicializada la sumamos 1 al contador
    else{
        contador[fruta] += 1;
    }
}

//Imprimimos el resultado.
console.log(contador);

// CICLO WHILE
console.log ("Mostramos el tipo de frutas con un ciclo while");

let contador2 = {};
let j = 0;

while ( j < frutas.length) {
    let fruit = frutas[j];

    if(contador2[fruit] === undefined) {
        contador2[fruit] = 1; 
    }

    else {
        contador2[fruit] += 1;
    }

    j++; //para que incremente 
}

console.log (contador2);
