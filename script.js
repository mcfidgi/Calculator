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
let firstNumber = 0;
let operator = `Nothing selected yet`;
let secondNumber = ``;

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

const display = document.querySelector("#display");


const one = document.querySelector(`.one`);
const two = document.querySelector(`.two`);
const three = document.querySelector(`.three`);
const four = document.querySelector(`.four`);
const five = document.querySelector(`.five`);
const six = document.querySelector(`.six`);
const seven = document.querySelector(`.seven`);
const eight = document.querySelector(`.eight`);
const nine = document.querySelector(`.nine`);
const zero = document.querySelector(`.zero`);
const decimal = document.querySelector(`.decimal`);
const backspaceButton = document.querySelector(`.backspace`);
const clearButton = document.querySelector(`.clear`);
const addButton = document.querySelector(`.add`);
const subtractButton = document.querySelector(`.subtract`);
const multiplyButton = document.querySelector(`.multiply`);
const divideButton = document.querySelector(`.divide`);
const equalsButton = document.querySelector(`.equals`);


one.addEventListener('click', () => {
    secondNumber = secondNumber.concat('1');
    display.textContent = secondNumber;
} );
two.addEventListener('click', () => {
    secondNumber = secondNumber.concat('2');
    display.textContent = secondNumber;
} );
three.addEventListener('click', () => {
    secondNumber = secondNumber.concat('3');
    display.textContent = secondNumber;
} );
four.addEventListener('click', () => {
    secondNumber = secondNumber.concat('4');
    display.textContent = secondNumber;
} );
five.addEventListener('click', () => {
    secondNumber = secondNumber.concat('5');
    display.textContent = secondNumber;
} );
six.addEventListener('click', () => {
    secondNumber = secondNumber.concat('6');
    display.textContent = secondNumber;
} );
seven.addEventListener('click', () => {
    secondNumber = secondNumber.concat('7');
    display.textContent = secondNumber;
} );
eight.addEventListener('click', () => {
    secondNumber = secondNumber.concat('8');
    display.textContent = secondNumber;
} );
nine.addEventListener('click', () => {
    secondNumber = secondNumber.concat('9');
    display.textContent = secondNumber;
} );
zero.addEventListener('click', () => {
    secondNumber = secondNumber.concat('0');
    display.textContent = secondNumber;
} );
decimal.addEventListener('click', () => {
    if (secondNumber.includes('.')) {
        alert('You can only have one decimal point with our current understanding of math!');
    } else {
        secondNumber = secondNumber.concat('.');
    display.textContent = secondNumber;
    }
} );
clearButton.addEventListener('click', () => {
    secondNumber = '';
    firstNumber = 0;
    operator = "Nothing selected yet";
    display.textContent = secondNumber;
} );
backspaceButton.addEventListener('click', () => {
    secondNumber = secondNumber.slice(0, -1);
    display.textContent = secondNumber;
} );
addButton.addEventListener('click', () => {
    if (operator == 'Nothing selected yet') {
        firstNumber = Number(secondNumber);
    } else {
        firstNumber = operate(firstNumber, operator, Number(secondNumber));
    };
    operator = 'add';
    secondNumber = '';
    display.textContent = firstNumber;
} );
subtractButton.addEventListener('click', () => {
    if (operator == 'Nothing selected yet') {
        firstNumber = Number(secondNumber);
    } else {
        firstNumber = operate(firstNumber, operator, Number(secondNumber));
    };
    operator = 'subtract';
    secondNumber = '';
    display.textContent = firstNumber;
} );
multiplyButton.addEventListener('click', () => {
    if (operator == 'Nothing selected yet') {
        firstNumber = Number(secondNumber);
    } else {
        firstNumber = operate(firstNumber, operator, Number(secondNumber));
    };
    operator = 'multiply';
    secondNumber = '';
    display.textContent = firstNumber;
} );
divideButton.addEventListener('click', () => {
    if (operator == 'Nothing selected yet') {
        firstNumber = Number(secondNumber);
    } else {
        firstNumber = operate(firstNumber, operator, Number(secondNumber));
    };
    operator = 'divide';
    secondNumber = '';
    display.textContent = firstNumber;
} );
equalsButton.addEventListener('click', () => {
    if (operator == 'Nothing selected yet') {
        console.log('No operator selected!')
    } else {
        firstNumber = operate(firstNumber, operator, Number(secondNumber));
        operator = "Nothing selected yet";
        secondNumber = '';
        display.textContent = String(firstNumber);
    };
} );

// alright so 
// Init: secondNumber is empty string. First Number is zero. 
//we'll have it be so that if a button is clicked, that number is added to the string secondNumber. If an operator is clicked, then that string is converted to a number firstNumber and that operator is stored as well. The display is cleared. secondNumber is now an empty string. When you select a number it'll add it to the string secondNumber. If equalsButton is clicked, secondNumber is converted to a number and added to firstNumber, and then firstNumber is displayed. If another operator is clicked, then  secondNumber is still converted to a number and added to firstNumber, but the screen is cleared and awaits the next input.

display.textContent = secondNumber;

document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
};
document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key == '1') {
        one.click();
    } else if (key == '2') {
        two.click();
    } else if (key == '3') {
        three.click();
    } else if (key == '4') {
        four.click();
    } else if (key == '5') {
        five.click();
    } else if (key == '6') {
        six.click();
    } else if (key == '7') {
        seven.click();
    } else if (key == '8') {
        eight.click();
    } else if (key == '9') {
        nine.click();
    } else if (key == '0') {
        zero.click();
    } else if (key == '+') {
        addButton.click();
    } else if (key == '-') {
        subtractButton.click();
    } else if (key == '*') {
        multiplyButton.click();
    } else if (key == '/') {
        divideButton.click();
    } else if (key == '=') {
        equalsButton.click();
    } else if (key == 'Enter') {
        equalsButton.click();
    } else if (key == 'Backspace') {
        backspaceButton.click();   
    } else if (key == '.') {
        decimal.click();    
    } else {
        return
    }
});