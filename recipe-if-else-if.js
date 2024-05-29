const readlineSync = require('readline-sync');

const suhu = readlineSync.question('Berapa suhu oven? dalam celcius');

if(suhu < 100){
    console.log('tidak terlalu panas');
}else if(suhu == 100){
    console.log('suhu mendidih')
}else{
    console.log('panas banget');
}