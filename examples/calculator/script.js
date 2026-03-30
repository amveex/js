let field = document.getElementById("FIELD");


let A = null;
let numA = null;
let B = null;
let numB = null;
let symbol = null;


function reset() {
    field.value = "";
    A = null;
    numA = null;
    B = null;
    numB = null;
    symbol = null;
}


function pickNumber(number) {
    field.value += number;
}


function pickOperator(operator) {
    symbol = operator;
    
    if (A == null) {
        A = field.value;
    }

    field.value = "";
}


function calculate() {
    B = field.value;
    numA = Number(A);
    numB = Number(B);

    switch (symbol) {
        case '+':
            showResult(numA + numB);
            break;
        case '-':
            showResult(numA - numB);
            break;
        case '*':
            showResult(numA * numB);
            break;
        case '/':
            showResult(numA / numB);
            break;
    }
}


function showResult(result) {
    field.value = result;
    A = result;
}
