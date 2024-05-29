const masakSup = function (daging){
    const dagingYangKitaBisaMasak = ['ikan', 'ayam', 'sapi'];
    if(dagingYangKitaBisaMasak.includes(daging.toLowerCase())){
        return `Sup ${daging}`;
    }
}

console.log(masakSup('ikan'));
console.log(masakSup('ayam'));
console.log(masakSup('Ikan'));
console.log(masakSup('ibab'));