class Libro {
    //ATRIBUTOS dentro del CONSTRUCTOR
    constructor(nombre, autor, genero, anio, calificacion , opinion){
        this.nombre = nombre
        this.autor = autor
        this.genero = genero
        this.anio = anio
        this.calificacion = calificacion
        this.opinion = opinion
        this.fechaHora = new Date().toLocaleString();
    }

    mostrarInfo() {
        return `<strong>📖 Título:</strong> ${this.nombre} <br>
                <strong>👨‍💼 Autor:</strong> ${this.autor} <br>
                <strong>📚 Género:</strong> ${this.genero} <br>
                <strong>📅 Año:</strong> ${this.anio} <br>
                <strong>⭐ Calificación:</strong> ${this.calificacion}/5 <br>
                <strong>📝 Opinión:</strong> ${this.opinion}`;
    }
    
 }

const formularioLibro = document.getElementById("Libro");
const listaResena = document.getElementById("resena");


formularioLibro.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const anio = document.getElementById("anio").value;
    const calificacion = document.getElementById("calificacion").value;
    const opinion = document.getElementById("opinion").value;  

    //Crear obj para los datos
    const nuevoLibro = new Libro(nombre, autor, genero, anio, calificacion, opinion);

    const item = document.createElement("li");
    item.classList.add("resena");

    item.innerHTML = `
    <p>${nuevoLibro.mostrarInfo()}<p>
    <br>
    <small>${nuevoLibro.fechaHora}</small>
    <button class="boton-eliminar">Eliminar</button>
    `;

    // Agregar funcionalidad al botón de eliminar
    item.querySelector(".boton-eliminar").addEventListener("click", function() {
    listaResena.removeChild(item);
    });

    // Agregar el <li> a la lista
    listaResena.appendChild(item);
    formularioLibro.reset();
});