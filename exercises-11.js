function tentukanDeretAritmatika(arr) {
    var aritmatika = true;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] - arr[i-1] !== arr[1] - arr[0]){
            aritmatika = false;
        }
    }
    return aritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 3, 5, 7, 9]));
