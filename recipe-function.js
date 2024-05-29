//function masakSup(){
//    return 'sup';
//}

//const masakan = masakSup();
//console.log(masakan);
//console.log(masakSup());

console.log(masakSup('ayam'));
console.log(masakSup('ibab'));

function masakSup(daging){
    const dagingYangKitaBisaMasak = ['ikan', 'ayam', 'sapi'];
    if(dagingYangKitaBisaMasak.includes(daging.toLowerCase())){
        return `Sup ${daging}`;
    }
}

console.log(masakSup('ikan'));
