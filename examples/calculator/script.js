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
    A = field.value;
    symbol = operator;
    field.value = "";
}


function calculate() {
    B = field.value;
    numA = Number(A);
    numB = Number(B);

    switch (symbol) {
        case '+':
            field.value = numA + numB;
            break;
        case '-':
            field.value = numA - numB;
            break;
        case '*':
            field.value = numA * numB;
            break;
        case '/':
            field.value = numA / numB;
            break;
    }
}
