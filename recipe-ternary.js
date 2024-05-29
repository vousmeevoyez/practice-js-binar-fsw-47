const readlineSync = require('readline-sync');

const suhu = readlineSync.question('Berapa suhu oven? dalam celcius');

const panasGa = suhu < 100 ? 'tidak panas': 'panas';
console.log(panasGa)

console.log(suhu < 100 ? 'tidak panas' : ' panas');