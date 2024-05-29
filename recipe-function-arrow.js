const masakSup = (daging) => {
    const dagingYangKitaBisaMasak = ['ikan', 'ayam', 'sapi'];
    if(dagingYangKitaBisaMasak.includes(daging.toLowerCase())){
        return `Sup ${daging}`;
    }
}

console.log(masakSup('ikan'));

const masakSup2 = (daging, bumbu, pedas) => `Sup ${daging} dengan ${bumbu}, ${pedas}`;

console.log(masakSup2('ayam', 'kari', 'pedas'));
