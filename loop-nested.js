const readlineSync = require('readline-sync');

const brpLantai = readlineSync.question('Mau ngepel berapa lantai? (1-100) ');
const brpRuanganTiapLantai = readlineSync.question('Berapa ruangan setiap lantai? (1-100) ');

for(lantai = 1; lantai <= brpLantai; lantai++){
    console.log(lantai)
    console.log(`lagi ngepel lantai ${lantai}`);

    for(ruangan = 1; ruangan <= brpRuanganTiapLantai; ruangan++){
        console.log(ruangan)
        console.log(`lagi ngepel ruang ${ruangan} di lantai ${lantai}`);
    }
}