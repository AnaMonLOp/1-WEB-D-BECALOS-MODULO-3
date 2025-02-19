//Crear array llamado librosLeidos
let librosLeidos = ["Mujercitas", "Frankenstein"]

//Antes de aplicar funciones
console.log(librosLeidos);

//Función para añadir libro
function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

//Función para imprimir los libros que se han leído
function mostrarLibrosLeidos(){
    console.log(librosLeidos);
}

//Después de aplicar las funciones
agregarLibro("Cien años de soledad");
agregarLibro("Drácula");
mostrarLibrosLeidos()
