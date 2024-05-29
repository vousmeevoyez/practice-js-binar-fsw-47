function racikBumbu(bumbu){
    const bumbuYangBisaDiracik= ['kari', 'asam-manis', 'ladas'];
    return bumbuYangBisaDiracik.includes(bumbu.toLowerCase());
}

function periksaDaging(daging){
    const dagingYangKitaBisaMasak = ['ikan', 'ayam', 'sapi'];
    return dagingYangKitaBisaMasak.includes(daging.toLowerCase());
}

function periksaPedes(pedas){
    return `cek level pedas ${pedas}`;
}

function masakSup(daging, bumbu, pedas){
    if(periksaDaging(daging)){
        if(racikBumbu(bumbu)){
            console.log(periksaPedes(pedas));
            return `Sup ${daging} dengan ${bumbu} ${pedas}`;
        }
    }
}

console.log(masakSup('ikan', 'kari', 'sedang'));
console.log(masakSup('ibab', 'kari', 'sedang'));
