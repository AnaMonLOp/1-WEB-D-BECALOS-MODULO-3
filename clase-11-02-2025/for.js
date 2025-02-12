//Ejemplo 1: Contador simple con for
for (let contador = 1; contador <= 5; contador++){
    console.log("(FOR)El contador está en el ciclo:", contador);
}

//Ejemplo 2: Conatdor en reversa con for 
for (let cuentaRegresiva = 10; cuentaRegresiva > 0; cuentaRegresiva--) {
    console.log("(FOR) cuenta regresiva", cuentaRegresiva);
}

//Ejemplo 3: Saltarnos los números pares
for(let impar = 1; impar <= 10 ; impar+=2 ) {
    console.log("Número impar: ", impar);
}

//Otra forma de solucionarlo
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; //continue nos ayuda a saltarnos una iteración
    }
    console.log(i);
}