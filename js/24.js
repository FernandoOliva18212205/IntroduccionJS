// For Loop

// console.log(1);

// for(let i = 0; i<6;i++){
//     console.log(i);
// }


// for(let i = 1; i<=100;i++){
//     if(i%2 === 0){
//         console.log(`El numero ${i} es par`);
//     }
//     else{
//         console.log(`El numero ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio : 500},
    {nombre: 'Television 50 pulgadas', precio : 500},
    {nombre: 'Tablet', precio : 500},
    {nombre: 'Celular', precio : 200},
    {nombre: 'Bocinas', precio : 50},
    {nombre: 'Laptop', precio : 300},
    {nombre: 'Teclado', precio : 800}
];

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}
