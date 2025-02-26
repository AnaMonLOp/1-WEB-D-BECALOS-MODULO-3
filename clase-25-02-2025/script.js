class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
    }

    // Método para mostrar información del producto
    //Las comillas invertidas me ayudan a implementar la sintaxis de template string
    //Este tipo de cadenas de texto me permite envever cadenas de caracteres con variables
    //Para agregar una variable a la cadena de texto usamos la sintaxis de ${nombre_variable}

    mostrarInfo() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio: $${this.precio}`;
    }
}

// Clase ProductoConDescuento que hereda de Producto
class ProductoConDescuento extends Producto {
    constructor(nombre, precio, categoria, descuento) {
        super(nombre, precio, categoria);
        this.descuento = descuento; // Descuento en porcentaje
    }

    // Método para calcular el precio con descuento
    calcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100);
    }

    // Sobreescribir el método mostrarInfo para incluir el descuento
    mostrarInfo() {
        return `Producto: ${this.nombre} | Categoría: ${this.categoria} | Precio Original: $${this.precio} | Precio con Descuento: $${this.calcularPrecioFinal()}`;
    }
}

let refri = new Producto("Refrigerador", 1200, "Electrónica")
console.log(refri.mostrarInfo());

let termo = new ProductoConDescuento("Termo 13oz", 700, "Cocina", 20)
console.log(termo.mostrarInfo());


// --------- Capturamos el formulario del DOM ------------
const formulario = document.getElementById("producto-form");
const listaProductos = document.getElementById("lista-productos");

// .addEventListener es un método que me ayuda a "escuchar" cuando se dispara un evento en particular
// (onClick, onSubmit, etc.).
//Este método recibe como parámetros dos valores:
//Primer atributo: Nombre del evento que tiene que escuchar (click, submit, etc.)
//Segundo atributo: Función que se va a ejecutar cuando se escuche el evento.

// Evento para manejar la adición de productos
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;
    const descuento = parseFloat(document.getElementById("descuento").value);
    //parseFloat() se usa para convertir los valores númericos de texto en números decimales

    // Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li");
    // li es lista

    
    let nuevoProducto;
    if (descuento > 0) {
        nuevoProducto = new ProductoConDescuento(nombre, precio, categoria, descuento);
        item.classList.add("descuento");
    } else {
        nuevoProducto = new Producto(nombre, precio, categoria);
    }
    
    item.textContent = nuevoProducto.mostrarInfo();
    listaProductos.appendChild(item);

    // Limpiar formulario
    formulario.reset();
});