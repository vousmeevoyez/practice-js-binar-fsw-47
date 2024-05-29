const readlineSync = require('readline-sync');

const bintang = readlineSync.question('Berapa banyak bintang? (0 - 100) ');

for(var i=1; i<=bintang; i++){
     console.log("* ".repeat(i));
}
