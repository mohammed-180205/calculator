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
            return "ERROR! Can't divide by 0!";
        } else{
            return divide(num1,num2);
        }
        
}
}
let result = "";
let setState = true;
let operatorState = false;
let isResultDisplayed = false;

let inputBox = document.querySelector("input");
let num1btn = document.querySelectorAll(".number");

num1btn.forEach((item) => {
item.addEventListener("click", () => {
    if(isResultDisplayed){
        num1 = "";
        operator = "";
        inputBox.value = "";
        setState = true;
        operatorState = false;

    } 
            isResultDisplayed = false;


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
    isResultDisplayed = false;
    isDot = false;
    if(operatorState){
        num1 = Number(num1);
        num2 = Number(num2);
        result = operate(num1, operator, num2);
        num1 = result.toString();
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
num1 = result.toString();
num2 = "";
isResultDisplayed = true;
operatorState = false;
isDot = false;
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    inputBox.value = "";
    setState = true;
    operatorState = false;
    isResultDisplayed = false;
    isDot = false;
})

let isDot = false;
let dot = document.querySelector(".dot");
 dot.addEventListener("click" , () => {
if(isDot){

    if(isResultDisplayed){
        isDot = false;
    }
    

} else{
    

    if(setState){
        if(num1 == ""){
            num1 += 0 + ".";
        } else{
            num1 += ".";
        }
        isDot = true;
        
        
    } else{
        if(num2 == ""){
            num2 += 0 + ".";
        } else{
            num2 += ".";
        }
        
        isDot = true;
    }

    
}

    inputBox.value = num1 + operator + num2;

 })

 let backspace = document.querySelector(".delete");
 backspace.addEventListener("click" , () => {
    if(num1[num1.length -1] == "."){
        isDot = false;
    }
    if(isResultDisplayed){
        num1 = num1.slice(0,-1)
    } else{
        num1 = num1.slice(0,-1)
        num2 = num2.slice(0,-1)
    }

    inputBox.value = num1;

 });
