let field = document.getElementById("FIELD");
let A = null;
let numA = null;
let B = null;
let numB = null;
let sum = null;
let symbol = null;


function reset() {
    field.value = "";
    A = null;
    numA = null;
    B = null;
    numB = null;
    sum = null;
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
            sum = numA + numB;
            field.value = sum;
            A = sum;
            break;
        case '-':
            sum = numA - numB;
            field.value = sum;
            A = sum;
            break;
        case '*':
            sum = numA * numB;
            field.value = sum;
            A = sum;
            break;
        case '/':
            sum = numA / numB;
            field.value = sum;
            A = sum;
            break;
    }
}
