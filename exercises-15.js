function groupAnimals(animals) {
    var sementara = [];
    var hasil = [];
    animals.sort();
    selesai:
    for(var i = 0; i<animals.length; i++){
        sementara = [];
        sementara.push(animals[i]);
        for(var j = i+1; j<animals.length; j++){
            if(animals[i][0] == animals[j][0]){
                sementara.push(animals[j]);
                if(j == animals.length-1){
                    hasil.push(sementara);
                    break selesai;
                }
            }
            else if(animals[i][0] !== animals[j][0]){
                i = j-1;
                break;
            }
        }
        hasil.push(sementara);
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]