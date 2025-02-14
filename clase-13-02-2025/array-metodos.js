let frutas = ["Manzana"]
let otrasFrutas = ["Uva", "Aguacate"]

//Métodos comunes en arreglos

//.push() -> Agrega un elemento al FINAL del arreglo
frutas.push("Pera")
frutas.push("Guayaba")
frutas.push(otrasFrutas) //-> length = 4 porque agrega todo el arreglo completo en la última posición
console.log("Despues de push", frutas);

//frutas[3][0] -> "Uva" ->Entramos directamente :0

// .pop() -> Elimina el ÚLTIMO elemento del arreglo
console.log(frutas.pop()); //obtengo el último elemento al INICIO del arreglo
console.log("Después de pop", frutas);

//.unshift(<nuevoElemento) -> Agregamos un elemento al INICIO del arreglo
frutas.unshift("Melón")
console.log("Despues de unshift", frutas);

//shift() -> Elimina el PRIMER elemento
console.log (frutas.shift());
console.log("Despues de shift", frutas);

//.map() -> CREA un nuevo arreglo transformando cada elemento de mi arreglo
/* 
    .map() recorre cada elemento del arreglo original y devuelve un nuevo arreglo 
    con los elementps tranformados. El arreglo original no se modifica
*/


//Ejmeplo 1: Multiplicamos cada elemento (item) del arreglo por dos
let numeros = [1,2,3]
let numerosPorDos = numeros.map((numero) => numero * 2)
console.log("Numeros múltiplicados por dos", numerosPorDos);


//Ejemplo 2: Convertir cada fruta en mayúscula 
let frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase()) //toUpperCase() convierte caracteres en mayusculas
console.log("Frutas en mayúscula", frutasEnMayusculas);

"CADENA".toLowerCase() //convierte caracteres en minúsculas

//let frutasEnMiniscula = frutasEnMayusculas.map((fruta) => frutasEnMayusculas.toLowerCase()) -> sale en error porque tratamos 
//de convertir un arreglo en minusculas

let frutasEnMinusculas = frutas.map((fruta) => fruta.toLowerCase())
console.log("Ejercicio 1.2", frutasEnMinusculas);

//.sort() -> Ordena los elementos del arreglo en orden alfabético
/* 
    .sort() cambia el orden de los elementos del arreglo original de manera alfabética
    o númerica si se proporciona una FUNCIÓN de comparación 
*/

let verduras = ["Espinaca", "Zanahoria", "Calabaza"]

console.log("Verduras ordenadas A-Z", verduras.sort()); //ordena el arreglo de manera alfabética si no colocamos ningun argumento 
console.log("Verduras ordenadas Z-A", verduras.reverse()); 
//.sort() con números -> IMPORTANTE que si usamos sort directamente con números , los ordenará como texto
let numerosOrdenadosIncorrectamente = [11,2,9,98,21,6,55]
console.log("Números ordenados incorrectamente", numerosOrdenadosIncorrectamente.sort());

//Para ordenar correctamente números, debemos proporcionar una FUNCIÓN de comparación
let numerosOrdenadosCorrectamente = [11,2,9,98,21,6,55]
console.log("Numeros ordenados correctamente", numerosOrdenadosCorrectamente.sort((num1, num2)=>num1-num2)); //para que sea en orden MayorMenor num2-num1
/*
    La función de comparación va a tomar dos números (num1 y num2)
    -Si num1 es MENOR que num2, la resta da un número NEGATIVO, entonces num1 va antes que num2
    -Si num1 es MAYOR que num2, la resta da un número POSITIVO, entonces num1 va después que num2
    -Sin num1 y num2 son iguales, la resta da 0 y su orden no cambia
    Notas-Estas opciones se van a repetir en cada iteración
*/