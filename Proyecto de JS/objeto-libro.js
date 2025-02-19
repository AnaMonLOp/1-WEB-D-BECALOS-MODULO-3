//Crearemos el objeto y sus métodos
class Libro {
    //ATRIBUTOS dentro del CONSTRUCTOR
    constructor(titulo, autor, anio, estado, capitulosLibro = []){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.estado = estado 
        this.capitulosLibro = capitulosLibro
    } 

    //METODO de la CLASE
    describirLibro() {
        console.log("Libro titulado: ", this.titulo);
        console.log("Escrito por: ", this.autor);
        console.log("Año de publicación: ", this.anio);
        console.log("Estado del libro estado:", this.estado);
        console.log("Capítulos: ", this.capitulosLibro);
    }

    agregarCapitulo(capitulo){
        this.capitulosLibro.push(capitulo)
    }

    eliminarCapituloFinal(){
        this.capitulosLibro.pop()
    }
}

//Creación de/los objetos a partir de la clase
let libro1 = new Libro("Emma", "Jane Austen", 1815, "Disponible")
libro1.agregarCapitulo("Capítulo 1");
libro1.agregarCapitulo("Capítulo 20");
libro1.agregarCapitulo("Capítulo 21");
console.log("Antes de Eliminar el Capítulo Final");
libro1.describirLibro();
libro1.eliminarCapituloFinal();
console.log("Después de Eliminar el Capítulo Final")
libro1.describirLibro();

let libro2 = new Libro("Misery", "Stephen King", 1987, "Prestado")
libro2.agregarCapitulo("Capítulo 1");
libro2.agregarCapitulo("Capítulo 45");
libro2.describirLibro();
