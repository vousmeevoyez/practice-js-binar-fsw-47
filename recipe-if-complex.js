const readlineSync = require('readline-sync');

const dagingDimasakApa = readlineSync.question('Daging mau dimasak apa?');

if(dagingDimasakApa === 'bakar'){
    console.log(`daging bakar`);
}

if(dagingDimasakApa === 'rebus'){
    console.log(`daging rebu`);
}

if(dagingDimasakApa === 'goreng'){
    console.log(`daging goreng`);
}

if(dagingDimasakApa === 'panggang'){
    console.log(`daging panggang`);
}


// contoh lain
if(dagingDimasakApa === 'bakar'){
    console.log(`daging bakar`);
}else if(dagingDimasakApa === 'rebus'){
    console.log(`daging rebu`);
}else if(dagingDimasakApa === 'goreng'){
    console.log(`daging goreng`);
}else if(dagingDimasakApa === 'panggang'){
    console.log(`daging panggang`);
}

if(dagingDimasakApa === 'bakar'){
    console.log(`daging bakar`);
}else if(dagingDimasakApa === 'rebus'){
    console.log(`daging rebu`);
}else if(dagingDimasakApa === 'goreng'){
    console.log(`daging goreng`);
}else {
    console.log(`daging panggang`);
}