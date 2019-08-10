var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(array){
    for(i = 0; i < array.length; i++){
        for(j = 0; j<array[i].length; j++){
            if(j == 0){
                var nomor = array[i][j];
                console.log(nomor);
            }
            else if(j == 1){
                var nama = input[0][1];
                console.log(nama);
            }
            else if(j == 2){
                var ttl = input[0][1] + ', ' + input[0][1];
                console.log(ttl);
            }
            else if(j == 4){
                var hobi = input[0][1];
                console.log(hobi);
            }
        }
    }
}
dataHandling(input);

// console.log(dataHandling(input))

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca


// var i = input[0][1];
// console.log(i)
