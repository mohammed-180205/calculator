function add(a, b){
return a + b;
}

function subtract(a, b){
return a - b;
}

function multiply(a, b){
return a * b;
}

function divide(a, b){
return a / b;
}

let num1 = "";
let num2 = "";
let operator = "";

function operate(num1, operator, num2){
switch(operator){
    case "+":
        return add(num1,num2);
        
    case "-":
        return subtract(num1,num2);

    case "*":
        return multiply(num1,num2);

    case "/":
        if(num2 == 0){
            return "fuck you";
        } else{
            return divide(num1,num2);
        }
        
}
}
let result = "";
let setState = true;
let operatorState = false;
let inputBox = document.querySelector("input");
let num1btn = document.querySelectorAll(".number");
num1btn.forEach((item) => {
item.addEventListener("click", () => {
    if(setState){
    num1 += item.textContent;
} else{
    num2 += item.textContent;
    operatorState = true;
}
    inputBox.value += item.textContent;
    
    

})
})

let operatorBtn = document.querySelectorAll(".operator");
operatorBtn.forEach((item) => {
item.addEventListener("click", () => {
    if(operatorState){
        num1 = Number(num1);
        num2 = Number(num2);
        result = operate(num1, operator, num2);
        num1 = result;
        num2 = "";
        operator = item.textContent;
        inputBox.value = "";
        inputBox.value += num1 + operator;
        setState = false;

    } else{
        setState = false;
    operator = item.textContent;
    inputBox.value += item.textContent;

    }

    
    
    

})
})

let equalSign = document.querySelector(".equalTo");

equalSign.addEventListener("click", () => {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = operate(num1, operator, num2);
inputBox.value = result;
num1 = result;
num2 = "";
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    inputBox.value = "";
    setState = true;
})


