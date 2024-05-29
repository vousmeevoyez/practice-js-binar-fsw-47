const readlineSync = require('readline-sync');

const daging = readlineSync.question('Masak daging apa hari ini? ');
const dagingBeku = readlineSync.question('Apa dagingnya beku? ');

if(dagingBeku !== 'beku' && daging === 'sapi'){
    console.log('daging bisa dimasak');
}else if(daging === 'ikan'){
    console.log('daging perlu dibersihkan dulu');
}else{
    console.log('daging tidak bisa dimasak');
}