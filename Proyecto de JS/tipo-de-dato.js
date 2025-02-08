// Vamos a probar los diferentes tipos de datos en JavaScript 

console.log(typeof 42); //Tipo de dato: number
console.log(typeof'Veinticinco'); //Tipo de dato: string
console.log(typeof -666); //Tipo de dato: number
console.log(typeof true); //Tipo de dato: boolean
console.log(typeof 0); //Tipo de dato: number
console.log(typeof ''); //Tipo de dato: string 
console.log(typeof null); //Tipo de dato: object
/*  
   Me llamó la atención por qué aparecía este resultado, así que investigué.  
   Descubrí que esto es un error de diseño en JavaScript que persiste  
   por compatibilidad. Aunque `null` es un tipo de dato primitivo,  
   `typeof null` devuelve `"object"` debido a una falla en la implementación original.  
*/

console.log(typeof undefined); //Tipo de dato: undefined
console.log(typeof FALSE); //Tipo de dato: undefined
/*  
   Esto se debe a que está escrito en mayúsculas, por lo que `FALSE`  
   no es una palabra clave ni un valor especial en JavaScript.  
   En su lugar, se interpreta como una variable, y si no ha sido  
   definida, `typeof` devuelve `"undefined"`.  
*/


// Declaración de una variable para comprobar el valor que devuelve `typeof`
let valorTipo = false;
console.log(typeof valorTipo); //Tipo de dato: boolean