function average(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for( let i = 0; i< arr.length; i++){
        sum += arr[i];
        
    }
    sum = sum / arr.length;
    return sum;
}
console.log(average([85, 90, 78, 92])); 