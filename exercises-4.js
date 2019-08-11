var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data){
    data.splice(1,1,'Roman Alamsyah Elsharaw');
    data.splice(2,1,'Provinsi Bandar Lampung');
    data.pop();
    data.push('Pria', 'SMA Internasional Metro');
    console.log(data)

    var date = data[3].split('/');
    if(date[1] == 1){
        console.log('Januari')
    }
    else if(date[1] == 2){
        console.log('Februari')
    }
    else if(date[1] == 3){
        console.log('Maret')
    }
    else if(date[1] == 4){
        console.log('April')
    }
    else if(date[1] == 5){
        console.log('Mei')
    }
    else if(date[1] == 6){
        console.log('Juni')
    }
    else if(date[1] == 7){
        console.log('Juli')
    }
    else if(date[1] == 8){
        console.log('Agustus')
    }
    else if(date[1] == 9){
        console.log('September')
    }
    else if(date[1] == 10){
        console.log('Oktober')
    }
    else if(date[1] == 11){
        console.log('November')
    }
    else if(date[1] == 12){
        console.log('Desember')
    }

    console.log(date)

    var tanggal = date.join('-');
    console.log(tanggal);

    var nama = data[1].slice(0,15);
    console.log(nama);
    


}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */