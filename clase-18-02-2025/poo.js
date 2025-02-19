/*
    POO, Glosario.
    -CLASE: Es una plantilla para crear objetos. Define atributos
    y métodos. Se define con la palabra reservada class seguido 
    del nombre empezado con mayúscula y en singular.
  
    -OBJETO: Es la instancia de una clase, con sus propios valores
    para los atributos definidos en la clase.
  
    -ATRIBUTO: Son las características o propiedades de una clase.
  
    -METODOS: Son las funciones dentro de una clase que definen el 
    comportamiento de los objetos.
  
    -CONSTRUCTOR: Es un método especial de una clase que se ejecuta automáticamente
    al crar un objeto. Sirve para inicializar los atributos de la clase
*/

//Paso 1. Define de una clase con sus atributos y métodos
class Persona {
    //ATRIBUTOS dentro del CONSTRUCTOR
    constructor(nombre, edad, nacionalidad){
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad =nacionalidad 
    }

    //METODO de la CLASE
    saludar(){
        console.log("Hola, mi nombre es", this.nombre, "tengo", this.edad, "años, soy", this.nacionalidad);
    
    }
}

//Paso 2. Creación del/los objetos a partir de la clase
let persona1 = new Persona("Pedro", 23, "Mexicano")
console.log(persona1)

//Paso 3. llamar a los métodos de mi objeto
persona1.saludar()

/* 
    * Ejercicio: Crear un objeto a partir de la clase persona con los datos de:
        nombre  =Lucia, edad=30 y nacionalidad = canadiense
    -> new es una palabra reservada que me ayuda a implemnetar el método CONSTRUCTOR 
       que me ayuda a darle valores a los atributos de mi nuevo objeto
*/
let persona2 = new Persona("Lucia", 30, "Canadiense")
persona2.saludar()
