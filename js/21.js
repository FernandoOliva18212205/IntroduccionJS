// Arrow functions
const sumar2 = (n1,n2) => console.log(n1+n2);

sumar2(5,10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');


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

meses.forEach( mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});


//Some ideal para arreglo de objetos.
resultado = carrito.some( producto => producto.nombre === 'Celular PRO');
console.log(resultado);

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// filter
resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);

