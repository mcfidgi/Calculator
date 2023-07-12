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

function operate(firstNumber, operator, secondNumber) {
    if (operator == `add`) {
        return add(firstNumber, secondNumber);
    } else if (operator == `subtract`) {
        return subtract(firstNumber, secondNumber);
    } else if (operator == `multiply`) {
        return multiply(firstNumber, secondNumber);
    } else if (operator == `divide`) {
        return divide(firstNumber, secondNumber);   
    } else {alert(`Something went wrong. Operator error`)}
};
