//Ejemplo 1: Crear un arreglo simple
let frutas = ["Uva", "Manzana", "Pera", "Mango", "Fresa", "Aguacate"]
console.log("Lista de frutas:", frutas);



//Ejemplo 2: Acceder a elementos de un arreglo
console.log("Primera fruta", frutas[0]);
console.log("Última fruta",frutas[5] );
console.log("Última fruta",frutas[frutas.length - 1] );
//-1 en python significa último elemento, en JS no cuenta 

//Ejmeplo 3: Modificar un elemento del arreglo
frutas[4] = "Guayaba"
console.log("Frutas actualizadas:", frutas);