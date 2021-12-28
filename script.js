displayValue();

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0) return 'ERROR';
    else return num1 / num2;
}

function operate(num1, num2, operator) {
    let result;

    switch(operator) {
        case "+": 
            result = add(num1, num2);
        break;

        case "-": 
            result = subtract(num1, num2);
        break;

        case "*": 
            result = multiply(num1, num2);
        break;

        case "/": 
            result = divide(num1, num2);
        break;
    }

    return result;
}

function displayValue() {
    let result = "";
    let num1;
    let num2;
    let indexPlaceholder = -1;
    let operator = "";

    const display = document.querySelector('#display');

    const zero = document.querySelector('#zero');
    zero.addEventListener('click', () => {
        result += 0;
        display.textContent = result;
    });

    const one = document.querySelector('#one');
    one.addEventListener('click', () => {
        result += 1;
        display.textContent = result;
    });

    const two = document.querySelector('#two');
    two.addEventListener('click', () => {
        result += 2;
        display.textContent = result;
    });

    const three = document.querySelector('#three');
    three.addEventListener('click', () => {
        result += 3;
        display.textContent = result;
    });

    const four = document.querySelector('#four');
    four.addEventListener('click', () => {
        result += 4;
        display.textContent = result;
    });

    const five = document.querySelector('#five');
    five.addEventListener('click', () => {
        result += 5;
        display.textContent = result;
    });

    const six = document.querySelector('#six');
    six.addEventListener('click', () => {
        result += 6;
        display.textContent = result;
    });

    const seven = document.querySelector('#seven');
    seven.addEventListener('click', () => {
        result += 7;
        display.textContent = result;
    });

    const eight = document.querySelector('#eight');
    eight.addEventListener('click', () => {
        result += 8;
        display.textContent = result;
    });

    const nine = document.querySelector('#nine');
    nine.addEventListener('click', () => {
        result += 9;
        display.textContent = result;
    });

    const plus = document.querySelector('#add');
    plus.addEventListener('click', () => {
        num1 = parseInt(result);
        result += "+";
        indexPlaceholder = result.length;
        operator = "+"
        display.textContent = result;
    });

    const minus = document.querySelector('#subtract');
    minus.addEventListener('click', () => {
        num1 = parseInt(result);
        result += "-";
        indexPlaceholder = result.length;
        operator = "-"
        display.textContent = result;
    });

    const multiply = document.querySelector('#multiply');
    multiply.addEventListener('click', () => {
        num1 = parseInt(result);
        result += "*";
        indexPlaceholder = result.length;
        operator = "*"
        display.textContent = result;
    });

    const divide = document.querySelector('#divide');
    divide.addEventListener('click', () => {
        num1 = parseInt(result);
        result += "/";
        indexPlaceholder = result.length;
        operator = "/"
        display.textContent = result;
    });

    const equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        num2 = parseInt(result.slice(indexPlaceholder));
        result = operate(num1, num2, operator);
        display.textContent = result;
    });
}