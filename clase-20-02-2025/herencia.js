//HERENCIA

//Paso 1. Creación de la calse principal (clase padre, superclase)
class Persona{
    constructor(nombre, edad){
        //En el constructor inicializamos atributos de la clase
        this.nombre=nombre
        this.edad=edad
    }

    //Metodos de la clase
    saludar(nombrePersona){
        console.log("Hola", nombrePersona);
    }
}

let Persona1 = new Persona("Pepe", 30)
console.log(Persona1);

//Paso 2. Crear una subclase (Estudiante)
class Estudiante extends Persona{
    constructor(nombre, edad, materias){
        //Para poder heredar los atributos de la clase padre, tengo 
        //que llamar primero al super constructor
        super(nombre, edad)
        this.materias = materias
    }

    obtenerMaterias(){
        return this.materias
    }
}

let estudiante1= new Estudiante("Maria", 23, ["Español", "Historia"])
console.log(estudiante1);
console.log(estudiante1.obtenerMaterias());

let estudiante2= new Estudiante("Luis", 28, "Matemáticas")
console.log(estudiante2);
console.log(estudiante2.obtenerMaterias());

class EstudiantesMusica extends Estudiante{
    constructor(nombre, edad, materias, instrumentos){
        super(nombre, edad, materias)
        this.instrumentos = instrumentos
    }
    //Métodos
}

let estudianteMusica = new EstudiantesMusica("Juan", 20, ["Musica", "Letras"], "Guitarra")
console.log("Estudiante música", estudianteMusica);
estudianteMusica.saludar("Miguel");
