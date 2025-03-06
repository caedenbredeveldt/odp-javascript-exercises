const removeFromArray = function(arr, ...args) {
    arr = args[0];

    for (let i = 1; i < args.length; i++){
        target = args[i];
        for (let j = 0; j < arr.length; j++){
                let curr = arr[j];
                if (curr === target){
                    arr.splice(j, 1);
                    j--;
                }
                
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
