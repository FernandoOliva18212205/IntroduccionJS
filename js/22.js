const puntaje = "1000";

if(puntaje !== 1000) {
    console.log('No es igual')
}
else {
    
    console.log('Si el puntaje es 1000')
}


const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito){
    console.log('El usuario puede pagar')
}
else {
    console.log('Fondos insuficientes')
}


const rol = 'Administrador';

if(rol==='Administrador'){
    console.log('Acceso al sistema');
} else if(rol === 'Editor') {
console.log('Eres editor');
} else{
    console.log('No tienes acceso');
}