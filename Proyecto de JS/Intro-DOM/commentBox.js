class Pelicula {
    constructor(nombre, genero, calificacion, opinion) {
        this.nombre = nombre
        this.genero = genero
        this.calificacion = calificacion
        this.opinion = opinion
        this.fechaHora = new Date().toLocaleString(); //Crea un obj con la fecha y hora actuales
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre} | Género: ${this.genero} | Calificación: ${this.calificacion}/5 ⭐ | Reseña: ${this.opinion}`;
    }
}

const formularioPelicula = document.getElementById("Pelicula");
const listaResena = document.getElementById("resena");


formularioPelicula.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const genero = document.getElementById("genero").value;
    const calificacion = document.getElementById("calificacion").value;
    const opinion = document.getElementById("opinion").value;  

    //Crear obj para los datos
    const nuevaPelicula = new Pelicula(nombre, genero, calificacion, opinion);

    const item = document.createElement("li");
    item.classList.add("resena");

    item.innerHTML = `
    <p>${nuevaPelicula.mostrarInfo()}<p>
    <br>
    <small>${nuevaPelicula.fechaHora}</small>
    <button class="boton-eliminar">Eliminar</button>
    `;

    // Agregar funcionalidad al botón de eliminar
    item.querySelector(".boton-eliminar").addEventListener("click", function() {
    listaResena.removeChild(item);
    });

    // Agregar el <li> a la lista
    listaResena.appendChild(item);
    formularioPelicula.reset();
});