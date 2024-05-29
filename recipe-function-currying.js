function masakSup(daging){
    const dagingYangKitaBisaMasak = ['ikan', 'ayam', 'sapi'];
    if(dagingYangKitaBisaMasak.includes(daging.toLowerCase())){
        return function(bumbu){
            return function(pedas){
                return `Sup ${daging} dengan ${bumbu} ${pedas}`
            }
        }
    }
}

console.log(masakSup('ikan')('kari')('pedas'));
