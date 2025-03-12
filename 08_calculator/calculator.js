const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(x) {
  let total = 1;
  for (let i = 1; i <= x; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
