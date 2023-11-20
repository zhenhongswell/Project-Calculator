
let firstNumber_ = 0;
let SecondNumber_ = 0;
let operator_ = "";
let storeDisplayString = "";
//number operator number
// 3 + 2

const numberButtons = document.querySelector('.numbers');
const displayStringInput = document.querySelector('.display');

numberButtons.childNodes.forEach(btn => {
    btn.addEventListener("click",()=> {
        storeDisplayString = btn.textContent;
        displayStringInput.value = displayString;
    });
});


function operator(firstNumber,operator,secondNumber){
    let result = 0;
    switch(operator){
        case '+':
            result = add(firstNumber,secondNumber);
            break;
        case '-':
            result = subtract(firstNumber,secondNumber);
            break;
        case 'x':
            result = multiply(firstNumber,secondNumber);
            break;
        case '/':
            result = divide(firstNumber,secondNumber);
            break;
    }
    return result;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

