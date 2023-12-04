let displayValue = '0';
let currentOperator = '';
let firstOperand = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}

function setOperator(operator) {
    if (currentOperator !== '') {
        calculateResult();
    }
    currentOperator = operator;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
}

function calculateResult() {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }

    displayValue = result.toString();
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}

// Initial display update
updateDisplay();
