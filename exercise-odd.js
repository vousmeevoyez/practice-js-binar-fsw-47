const readlineSync = require('readline-sync');

const angka = readlineSync.question('Berapa banyak bilangan ganjil? (1-100)');

for(var i=1; i<=angka; i++){
  if (i % 2 != 0) {
    console.log(i);
  }
}

