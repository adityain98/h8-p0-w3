function targetTerdekat(arr) {
    var kanan = 0;
    var kiri = Math.pow(10, 100);
    var hasil = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == 'o'){
            for(var k = i -1; k>=0; k--){
                if(arr[k] == 'x'){
                    kiri = i-k;
                    hasil = kiri;
                    break;
                }
            }

            for(var j = i+1; j<arr.length; j++){
                if(arr[j] == 'x'){
                    kanan = j-i;
                    if(kanan<kiri){
                        hasil = kanan;
                        return kanan;
                    }
                }
            }
        }
    }
    return hasil;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2