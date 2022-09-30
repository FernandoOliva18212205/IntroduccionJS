// Switch
const metodoPago = 'cheque';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'bitcoin':
        console.log('Pagaste con bitcoin');
        break;
    case 'cheque':
            console.log('Pagaste con cheque');
            break;
    default:
        console.log('No pagaste')
        break;
}