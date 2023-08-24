
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

window.onload = console.log(operate());
