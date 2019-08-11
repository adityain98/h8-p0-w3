function balikString(kata){
    hasil = '';
    for(i = kata.length - 1 ; i >= 0 ; i--){
        hasil = hasil + kata[i];
    }
    return hasil;
}

console.log(balikString('Hello World!'));
console.log(balikString('Balik Kata'));