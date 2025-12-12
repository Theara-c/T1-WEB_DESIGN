function count (arr, chars){
let count  = 0;
for( let i = 0; i< arr.length; i++){
    if( arr[i] == chars){
        count++;
    }
}
return count;
}

let text = "hello world";
let chars = 'o';
console.log(count( text, chars));