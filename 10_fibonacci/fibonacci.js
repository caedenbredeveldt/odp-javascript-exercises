const fibonacci = function(n) {
    target = typeof n != 'number' ? parseInt(n) : n;
    if (target < 0){
        return 'OOPS';
    }
    if (target === 0)
    {
        return 0;
    }
    if (target == 1){
        return 1;
    };
    let prev = 0
    let sum = 1;
    for (let i = 2; i <= target; i++){
        let temp = sum;
        sum += prev;
        prev = temp;
    }
    return sum;
};
// const fibonacci = function(n) {
//     if (n === 0)
//     {
//         return 0;
//     }
//     if (n == 1){
//         return 1;
//     };
//     return fibonacci(n-1)+fibonacci(n-2);
// };

// Do not edit below this line
module.exports = fibonacci;
