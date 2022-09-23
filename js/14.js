// Arreglos o Arrays

const numeros = [10,20,30,40,50]

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo','Abril','Mayo');

console.table(meses);

const arreglo = ["Hola", 10 , true, "si"];

// Acceder a los datos de un arreglo.

console.log(arreglo[3]);

// Conocer la extension de un arreglo
console.log(arreglo.length);

numeros[5]=60;

// Agrega Al final del arreglo
numeros.push(70,80,90);

// Agrega Al inicio del arreglo
numeros.unshift(-10,-20,-30);

// // Elimina el ultimo elemento
// meses.pop();

// // Elimina el primer elemento
// meses.shift();
meses.splice(2,1);
console.table(meses);

// numeros.forEach(function(numero){
//     console.table(numeros)
// })

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];


console.log(nuevoArreglo);



