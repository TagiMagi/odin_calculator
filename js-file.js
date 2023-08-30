
let firstNum = 0;
let secondNum = 0;
let operator;


let opType = {

add (a, b) {
    return a + b;
},
sub (a, b) {
    return a - b;
},
multi (a, b) {
    return a * b; 
},
div (a, b) {
    return a / b;
},

}

function operate (x, y, op) {
  x = Number(prompt("x: " ));
  op = prompt("op: ");
  y = Number(prompt("y: " ));

 
  
    switch (op) {
        case "+":
         return opType.add(x, y);
        case "-":
         return opType.sub(x, y);
        case "*": 
         return opType.multi(x, y);
        case "/": 
         return opType.div(x, y);
    } 
    return false; 
}


function showButtons () {
if (screen.textContent == 0 && numOfTimes == 0) {
    screen.textContent = "";
}

if (numOfTimes < 25) {
let text = this.textContent;
textDisplayed = document.createTextNode(`${text}`);
screen.appendChild(textDisplayed);
numOfTimes++;
}
}

function clearDisplay () {
    screen.textContent = "0"; 
    numOfTimes = 0;
}

let numOfTimes = 0;

let screen = document.querySelector(".display");
let digits = document.querySelectorAll(".digit");
let clear = document.querySelector(".clear");
let operations = document.querySelectorAll(".operation");
let equals = document.querySelector(".equal");
screen.textContent.placeholder = "0"; 

digits.forEach(digit => digit.addEventListener('click', showButtons));
operations.forEach(operation => operation.addEventListener('click', showButtons));
clear.addEventListener('click', clearDisplay);
//equals.addEventListener('click',  )


//window.onload = console.log(operate());
