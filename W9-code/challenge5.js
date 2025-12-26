function countSpace ( text){
    let count = 0;
    for( let i = 0; i< text.length; i++){
        if(text[i] == " "){
            count++;
        }
    }
    return count+1;
}

let text = "this is the best day of my life";
console.log(countSpace(text));