const reverseString = function(string) {
    // space = " ";
    // if (space in string){

    // }
    let result = []
    arrWords = string.split(" ");
    for (let i = arrWords.length - 1; i >= 0; i--){
        word = arrWords[i];
        arr = word.split("");
        arr.reverse();
        result.push(arr.join(''));
    }
    return result.join(' ');
    
};

// Do not edit below this line
module.exports = reverseString;
