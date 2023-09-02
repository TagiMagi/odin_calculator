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
    
    let result;
    let opArrayX;
    let opArrayY = '';
    let disArray = screen.textContent.split("");
    let disArrayNew = [...disArray]
    let arrayOfOps = disArray.filter(n => {return n === "+" || n === "-" || n === "*" || n === "/"});
    
        for (const i in disArray) {
            if (!result) {
            if (disArray[i] === arrayOfOps[0]) {
                opArrayX = disArray.slice(0, i).join('');
                let sign = disArray[i];
                let disArrayCopy = [...disArray];
                disArrayCopy.splice(0, i);
                disArrayCopy.shift();
                    for (let i = 0; i < disArrayCopy.length; i++) {
                        if (disArrayCopy[i] == "+" || disArrayCopy[i] == "-" || disArrayCopy[i] == "*" || disArrayCopy[i] == "/") {
                        break;
                        }
                         opArrayY += disArrayCopy[i];
                        }
                console.log(opArrayX)
                result = String(operation(opArrayX, opArrayY, sign));
                arrayOfOps.shift();
                disArrayNew = disArray.slice(i);
                disArrayNew.shift();
                opArrayY = "";
                continue;
                console.log(opArrayY);
            }
        }
        
        if (disArray[i] === arrayOfOps[0]) {
        let sign = disArray[i];
        let disArrayCopy = [...disArray];
        disArrayCopy.splice(0, i);
        disArrayCopy.shift();
        if (disArrayCopy.length) {
        for (let i = 0; i < disArrayCopy.length; i++) {
            if (disArrayCopy[i] == "+" || disArrayCopy[i] == "-" || disArrayCopy[i] == "*" || disArrayCopy[i] == "/") {
            break;
            }
             opArrayY += disArrayCopy[i];
            }
        opArrayX = result; 
        console.log(opArrayY)
        result = String(operation(opArrayX, opArrayY, sign));
        arrayOfOps.shift();
        disArrayNew = disArrayNew.slice(i);
        disArrayNew.shift();
        opArrayY = "";
        }    
        }
        if (result === "Infinity") {
            result = "Super Impossible!"
        }
    }   
    screen.textContent = "";
    resultDisplay = document.createTextNode((result));
    screen.appendChild(resultDisplay);
}


    
        
    

    
    
       /* screen.textContent = "";
        resultDisplay = document.createTextNode(operation(opArrayX, opArrayY, sign))
        screen.appendChild(resultDisplay);*/




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