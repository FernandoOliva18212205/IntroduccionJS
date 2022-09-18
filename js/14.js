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

numeros.forEach(function(numero){
    console.log(numero)
})