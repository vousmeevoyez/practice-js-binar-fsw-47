import readlineSync from 'readline-sync';

const umur = readlineSync.question('Berapa umur kalian? ');

if(umur > 18){
    console.log('sudah cukup umur');
}else{
    console.log('belum cukup umur');

}