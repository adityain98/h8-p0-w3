var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data){
    for(i = 0; i<data.length; i++){
        for(j = 0; j<data[i].length; j++){
            var nomor = 'Nomor ID: ';
            var nama = 'Nama Lengkap: ';
            var ttl = 'TTL: ';  
            var hobi = 'Hobi: ';
            if(j == 0){
                console.log(nomor + data[i][j]);
            }
            else if(j == 1){
                console.log(nama + data[i][j]);
            }
            else if(j == 2){
                console.log(ttl + data[i][j]);
            }
            else if(j == 4){
                console.log(hobi + data[i][j]);
            }
        }
        console.log('\n')
    }
}

dataHandling(input);