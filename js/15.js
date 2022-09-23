const meses = ['Enero', 'Febrero', 'Marzo','Abril','Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio : 500},
    {nombre: 'Television 50 pulgadas', precio : 500},
    {nombre: 'Tablet', precio : 500},
    {nombre: 'Celular', precio : 200},
    {nombre: 'Bocinas', precio : 50},
    {nombre: 'Laptop', precio : 300},
    {nombre: 'Teclado', precio : 800}
];

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Diciembre');

//Some ideal para arreglo de objetos.
resultado = carrito.some(function(producto){
return producto.nombre === 'Celular PRO'
});

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

// filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});



console.log(resultado);