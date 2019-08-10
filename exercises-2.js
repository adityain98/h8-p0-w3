function balikString(kata){
    var string = kata;
    var stringlist = string.split('');
    console.log(stringlist)
    var hasil = '';
    for(var i = kata.length - 1; i>=0; i--){
        hasil = hasil + stringlist[i];
    }
    return hasil;
}

console.log(balikString('kemarin'));
