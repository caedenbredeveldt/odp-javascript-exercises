const sumAll = function(min, max) {
    if (Number.isInteger(min) && Number.isInteger(max) && min > 0 && max > 0){
        if (min > max) {
            const temp = min;
            min = max;
            max = temp;
        }

        let sum = 0;
        for(let i = min; i <= max; i++){
            sum += i;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
