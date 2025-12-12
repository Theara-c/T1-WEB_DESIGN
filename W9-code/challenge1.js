function challenge1(width, height) {
    let rectangleString = '';
    if(width <= 0 || height <= 0) {
        return rectangleString;
    }
    // Your code
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangleString += '*';
        }
        rectangleString += '\n';
    }
    return rectangleString;
}
console.log(challenge1(5, 3));
