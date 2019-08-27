function pasanganTerbesar(num) {
    var arrayNum = num.toString().split('');
    var hasil = 0;
    var angka1 = 0;
    var angka2 = 0;
    
    for(i=0 ; i<arrayNum.length -1 ; i++){
        if(arrayNum[i] >= angka1){
            if(arrayNum[i]+arrayNum[i+1] > hasil){
                angka1 = arrayNum[i];
                angka2 = arrayNum[i+1];
                hasil = angka1+angka2;
            }
        }
    }
    var hasilAkhir = parseInt(hasil)
    return hasilAkhir;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log(pasanganTerbesar(9102393999));
  