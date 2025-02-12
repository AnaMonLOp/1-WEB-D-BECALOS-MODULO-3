//Ejemplo 1: Contador simple con while 

let contador = 1;

while(contador <= 5){
    console.log("El Contador está en el ciclo:", contador);
    contador++;
}

//Ejemplo 2: Contador de cuenta regresiva
let cuentaregresiva = 10;
while(cuentaregresiva > 0) {
    console.log("Cuenta regresiva", cuentaregresiva)
    cuentaregresiva--;
}

// confirm ("msj") -> da dos opciones true or false

//Ejemplo 3: Solicitar confirmación hasta que el usuario acepte

let confirmacion = true //Confirmaciones de true o false las solemos conocer támbien cómo banderas o flags


while(confirmacion){
    //otras tareas dentro del ciclo
    confirmacion = confirm("Quieres realizar otra operación?") //confirm devuelve true o false
    console.log("Confirmación recibida", confirmacion);

}