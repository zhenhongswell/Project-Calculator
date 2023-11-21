let storeDisplayString = '';
let CurrentAnswer = '';
const numberButtons = document.querySelector('.numbers');
const operatorButtons = document.querySelector('.operators')
const displayStringInput = document.querySelector('.display');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click',()=>{
    storeDisplayString = storeDisplayString.slice(0,-1);
    display(storeDisplayString);
})

numberButtons.childNodes.forEach(btn => {
    btn.addEventListener("click",()=>storeOnClicks(btn));
});

operatorButtons.childNodes.forEach(btn => {
    btn.addEventListener("click",()=>storeOnClicks(btn));
});

equalButton.addEventListener('click',()=>{
    let isFirstValue = true;
    let firstNumberString = '';
    let secondNumberString = '';
    let operatorString = '';
    // string turn to array
    storeDisplayString = storeDisplayString.split('');
    storeDisplayString.forEach((element,index,object) => {
        if (['+','-','*','/'].includes(element)){
            // deal multiple operators
            if (operatorString!=''){
                firstNumberString = operator(firstNumberString,operatorString,secondNumberString);
                console.log(`secondNumberString:${secondNumberString}`);
                secondNumberString = '';
            }
            isFirstValue = false;
            
            operatorString = element;
            return; // continue operator won't be stack to secondNumberString
        }
        isFirstValue ? firstNumberString += element: secondNumberString += element;
    });
    
    if (firstNumberString ===''){
        console.log('dont have first number');
        firstNumberString = '0';
    }else{
        console.log('first number:',firstNumberString);
    }
    if (secondNumberString ===''){
        console.log('dont have second number');
        secondNumberString ='0';
    }else{
        console.log('second number:',secondNumberString);
    }

    // press '=' btn
    if (operatorString === ''){
        storeDisplayString = firstNumberString;
    }else{
        storeDisplayString = operator(firstNumberString,operatorString,secondNumberString);
    }
    display(storeDisplayString);
});

clearButton.addEventListener('click',()=>clear());



function storeOnClicks(button) {
    //bug fix -> can't have multple + - * / .
    //check if the any none number text are input twice or multiple time

    // check if is a number
    if (['+','-','*','/'].includes(button.textContent)){
        //if the non-number texts are duplicate remove the last character
        //swap the last character.
        if (['+','-','*','/'].includes(storeDisplayString[storeDisplayString.length-1]))
            storeDisplayString = storeDisplayString.slice(0,-1);
        storeDisplayString += button.textContent;
        
    }else if (['.'].includes(button.textContent)){
        if (storeDisplayString[storeDisplayString.length-1]  !== '.'){
            //can't not have multple . in the string.
            storeDisplayString += button.textContent;
        }
    }
    else{
        storeDisplayString += button.textContent;
    }
    display(storeDisplayString);
}

function display(value){
    console.log(`${typeof(value)} | ${value}`);
    displayStringInput.value = value;
}

function clear(){
    storeDisplayString = '';
    display(storeDisplayString);
}



function operator(firstNumber,operator,secondNumber){
    if (firstNumber.includes("."))
        firstNumber = parseFloat(firstNumber)
    else{
        firstNumber = parseInt(firstNumber);
    }
    if (secondNumber.includes("."))
        secondNumber = parseFloat(secondNumber)
    else{
        secondNumber = parseInt(secondNumber);
    }

    let result = 0;
    switch(operator){
        case '+':
            result = add(firstNumber,secondNumber);
            break;
        case '-':
            result = subtract(firstNumber,secondNumber);
            break;
        case '*':
            result = multiply(firstNumber,secondNumber);
            break;
        case '/':
            result = divide(firstNumber,secondNumber);
            break;
    }
    if (result === 0){
        result = '';
    }
    return result.toString();
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

