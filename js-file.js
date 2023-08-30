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

function operation (x, y, op) {
  x1 = Number(x);
  y1 = Number(y);

    switch (op) {
        case "+":
         console.log(x1, y1)
         return opType.add(x1, y1);
        case "-":
         return opType.sub(x1, y1);
        case "*": 
         return opType.multi(x1, y1);
        case "/": 
         return opType.div(x1, y1);
    } 
    return false; 
}

function operate () {
    equalClicked = true;
    let disArray = screen.textContent.split("");
    console.log(disArray);
    let opArrayX;
    let opArrayY;
    let sign;
    for (let i = 0; i < disArray.length; i++) {
        if (disArray[i] === "+" || disArray[i] === "-" || disArray[i] === "*" || disArray[i] === "/") {
            sign = disArray[i];
            opArrayX = disArray.slice(0, [i]).join("");
            console.log(opArrayX)
            disArray.splice(0, [i+1]);
            break; 
        }
    }
        for (let i = 0; i < disArray.length; i++) {
            if (disArray[i] === "+" || disArray[i] === "-" || disArray[i] === "*" || disArray[i] === "/") {
                opArrayY = disArray.slice(0, [i]).join("");
                disArray.splice(0, [i])
                break; 
            }
        }
        if (opArrayY != true) {
            opArrayY = disArray.join("");
        }
        screen.textContent = "";
        resultDisplay = document.createTextNode(operation(opArrayX, opArrayY, sign))
        screen.appendChild(resultDisplay);
}

function showButtons () {
if (equalClicked == false) {
    
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
}

function clearDisplay () {
    equalClicked = false;
    screen.textContent = "0"; 
    numOfTimes = 0;
}

let numOfTimes = 0;
let equalClicked = false;

let screen = document.querySelector(".display");
let digits = document.querySelectorAll(".digit");
let clear = document.querySelector(".clear");
let operations = document.querySelectorAll(".operation");
let equals = document.querySelector(".equal");
 

digits.forEach(digit => digit.addEventListener('click', showButtons));
operations.forEach(operation => operation.addEventListener('click', showButtons));
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', operate);


//window.onload = console.log(operate());
