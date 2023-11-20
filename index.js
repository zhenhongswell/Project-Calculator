
let firstNumber_ = 0;
let SecondNumber_ = 0;
let operator_ = "";

//number operator number
// 3 + 2

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