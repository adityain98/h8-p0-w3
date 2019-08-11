function angkaPalindrome(num){
    var angka = num.toString().split('');
    if(angka.length !== 1 || num == 9){
        for(num = num + 1; num>0; num++){
            var angkaArr= num.toString().split('');
            var j = angkaArr.length-1;
            if(angkaArr.length % 2 == 0){
                genap:
                for(var i = 0; i<angkaArr.length/2; i++){
                    if(angkaArr[i] == angkaArr[j]){
                        if(i == angkaArr.length/2-1){
                            return num;
                        }
                        j--;
                    }
                    else{
                        j--;
                        break genap;
                    }
                }
            }
            else if(angkaArr.length % 2 == 1){
                ganjil:
                for(var i = 0; i<angkaArr.length/2; i++){
                    if(angkaArr[i] == angkaArr[j]){
                        if(i == angkaArr.length/2-1.5){
                            return num;
                        }
                        j--;
                    }
                    else{
                        j--;
                        break ganjil;
                    }
                }
            }
        }
    }
    else{
        num = num +1;
        return num;
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1001)); 
console.log(angkaPalindrome(2332332));
console.log(angkaPalindrome(123456));

