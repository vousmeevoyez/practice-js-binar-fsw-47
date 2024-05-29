const readlineSync = require('readline-sync');

const brpLantai = readlineSync.question('Mau ngepel berapa lantai? (1-100) ');

let i = 1;
while(i <= brpLantai){
    console.log(`lagi ngepel lantai ${i}`);
    i++;
}