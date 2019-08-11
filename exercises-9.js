function cariMean(arr) {
    var hasil = 0;
    for(i = 0; i< arr.length; i++){
        hasil = hasil + arr[i];
    }
    hasil = hasil/arr.length;
    return Math.ceil(hasil);
  }
  
// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); 
console.log(cariMean([3, 5, 7, 5, 3])); 
console.log(cariMean([6, 5, 4, 7, 3])); 
console.log(cariMean([1, 3, 3])); 
console.log(cariMean([7, 7, 7, 7, 7])); 