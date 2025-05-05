//display
const history = document.getElementById('history')
const answer = document.getElementById('answer')

//functions
const clear = document.getElementById('clear');
const del = document.getElementById('del');
const equal = document.getElementById('equal');

//operations
const sub = document.getElementById('sub');
const add = document.getElementById('add');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const dec = document.getElementById('dec');

//numbers
const one = document.getElementById('one')
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

//current
let currentNumber = "";
let firstNumber = null;
let secondNumber = null;
let operator = '';

function operate(num1, num2, oper) {
    if (oper == 'add'){
        return String(Math.round((num1 + num2)*100000)/100000);
    } else if (oper == 'sub'){
        return String(Math.round((num1 - num2)*100000)/100000);
    } else if (oper == 'mul') {
        return String(Math.round((num1 * num2)*100000)/100000);
    } else if (oper == 'div') {
        return String(Math.round((num1 / num2)*100000)/100000);
    }
}

function displayNum(num) {
    if (answer.innerText = "0"){
        answer.innerText = "";
    }
    currentNumber += num;
    answer.innerText = currentNumber;
}

//numbers
one.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(1);
    }
})
two.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(2);
    }
})
three.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(3);
    }
})
four.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(4);
    }
})
five.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(5);
    }
})
six.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(6);
    }
})
seven.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(7);
    }
})
eight.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(8);
    }
})
nine.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(9);
    }
})
zero.addEventListener('click', () => {
    if(answer.innerText.length <= 12) {
        displayNum(0);
    }
})

//functions
clear.addEventListener('click', () => {
    currentNumber = "";
    firstNumber = null;
    secondNumber = null;
    operator = '';
    isDec = false;
    history.innerText = "";
    answer.innerText = "0";
})
del.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    answer.innerText = currentNumber;
    if(currentNumber == ""){
        answer.innerText = "0";
    } 
})

//operators
add.addEventListener('click', () => {
    history.innerText = currentNumber + ' + '
    firstNumber = currentNumber;
    currentNumber = "";
    answer.innerText = 0;
    operator = 'add';
})
sub.addEventListener('click', () =>{
    history.innerText = currentNumber + ' - '
    firstNumber = currentNumber;
    currentNumber = "";
    answer.innerText = 0;
    operator = 'sub';
})
mul.addEventListener('click', () =>{
    history.innerText = currentNumber + ' * '
    firstNumber = currentNumber;
    currentNumber = "";
    answer.innerText = 0;
    operator = 'mul';
})
div.addEventListener('click', () =>{
    history.innerText = currentNumber + ' ÷ '
    firstNumber = currentNumber;
    currentNumber = "";
    answer.innerText = 0;
    operator = 'div';
})
equal.addEventListener('click', () =>{
    if(operator == 'add'){
        secondNumber = answer.innerText;
        answer.innerText = operate(Number(firstNumber), Number(secondNumber), 'add');
        history.innerText = '';
        currentNumber = '';
    } else if(operator == 'sub'){
        secondNumber = answer.innerText;
        answer.innerText = operate(Number(firstNumber), Number(secondNumber), 'sub');
        history.innerText = '';
        currentNumber = '';
    } else if (operator == 'mul') {
        secondNumber = answer.innerText;
        answer.innerText = operate(Number(firstNumber), Number(secondNumber), 'mul');
        history.innerText = '';
        currentNumber = '';
    } else if(operator == 'div'){
        secondNumber = answer.innerText;
        answer.innerText = operate(Number(firstNumber), Number(secondNumber), 'div');
        history.innerText = '';
        currentNumber = '';
    }
})
dec.addEventListener('click', () => {
    if(!currentNumber.includes('.')){
        currentNumber += '.';
        answer.innerText = currentNumber;
    }
})

