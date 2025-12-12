function challenge2(array) {
    let index = array.length/2;
    for( let i = 0; i<index; i++){
        let temp = array[i];
        array[i] = array[array.length -1 -i];
        array[array.length -1 -i] = temp;
    }
    return array;
}

console.log(challenge2([1, 2, 3, 4, 5])); 