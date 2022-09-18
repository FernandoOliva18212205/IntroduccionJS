"use strict"; // Correr js en modo estricto

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Congelar el Objeto.
Object.freeze(producto);

// No permite eliminar ni agregar solo modificar.
Object.seal(producto);


// producto.imagen = 'imagen.jpg';


console.log(Object.isFrozen(producto));
console.log(producto);