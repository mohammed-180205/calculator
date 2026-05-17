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


function numberEdit(num){
    if(isResultDisplayed){
        num1 = "";
        operator = "";
        inputBox.value = "";
        setState = true;
        operatorState = false;

    } 
            isResultDisplayed = false;


    if(setState){
    num1 += num;
    } else{
    num2 += num;
    operatorState = true;
    }
    inputBox.value += num;

}


num1btn.forEach((item) => {
item.addEventListener("click", () => {
    numberEdit(item.textContent);
})
})

document.addEventListener("keydown", () => {
    if(event.key >= "0" && event.key <= "9"){
    numberEdit(event.key);
    } 
})


let operatorBtn = document.querySelectorAll(".operator");

function operatorFunction(num){
    isResultDisplayed = false;
    isDot = false;
    if(operatorState){
        num1 = Number(num1);
        num2 = Number(num2);
        result = operate(num1, operator, num2);
        num1 = result.toString();
        num2 = "";
        operator = num;
        inputBox.value = "";
        inputBox.value += num1 + operator;
        setState = false;
        

    } else{
        setState = false;
    operator = num;
    inputBox.value = num1 + num;

    }

}


operatorBtn.forEach((item) => {
item.addEventListener("click", () => {
operatorFunction(item.textContent);
})
})

document.addEventListener("keydown" , () => {
    if(event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/"){
        operatorFunction(event.key);
    }
})



let equalSign = document.querySelector(".equalTo");

function equalFunction(){
    num1 = Number(num1);
    num2 = Number(num2);
    let result = operate(num1, operator, num2);
inputBox.value = result;
num1 = result.toString();
num2 = "";
isResultDisplayed = true;
operatorState = false;
isDot = false;
}

equalSign.addEventListener("click", () => {
equalFunction();
});

document.addEventListener("keydown", () => {
    if(event.key === "Enter"){
        equalFunction();
    }
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

function dotFunction(){
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

 }



 dot.addEventListener("click" , () => {
    dotFunction();
 })

 document.addEventListener("keydown" , () => {
    if(event.key === "."){
            dotFunction();

    }
 })




 let backspace = document.querySelector(".delete");

function backspaceFunction(){
    if(num1[num1.length -1] == "."){
        isDot = false;
    }
    if(isResultDisplayed){
        num1 = num1.slice(0,-1)
        setState = true;
        operatorState = false;
        
    } else{
        num1 = num1.slice(0,-1)
        num2 = num2.slice(0,-1)
    }

    

    inputBox.value = num1;

 }

 backspace.addEventListener("click" , () => {
backspaceFunction();
 });

 document.addEventListener("keydown" ,() => {
    if(event.key === "Backspace"){
        backspaceFunction();
    }
 })
