function palindrome(kata) {
    var j = kata.length-1;
    var hasil = true;
    for(var i=0; i<= kata.length/2;i++){
        if(kata[i] == kata[j]){
            j--
        }
        else{
            hasil = false;
            return hasil;
            break;
        }
    }
    return hasil;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
