const readlineSync = require('readline-sync');

const brpLantai = readlineSync.question('Mau ngepel berapa lantai? (1-100) ');

for(i = 1; i <= brpLantai; i++){
    console.log(i)
    console.log(`lagi ngepel lantai ${i}`);
}