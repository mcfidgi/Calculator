const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};


const multiply = function(...numbas) {
  let x = 1;
  numbas.forEach(function(item) {
    x = x * item;
  });
  return x;
};

const divide = function(x,y) {
    return x/y;
};

// Alrught, below will be the display variables. They will be:
let firstNumber = `clear`;
let operator = `clear`;
let secondNumber = `clear`;
let result = `clear`;