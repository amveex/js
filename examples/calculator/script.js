let field = document.getElementById("FIELD");

function pick(symbol) {
    let value = symbol;
    field.value += value;
}

function reset() {
    field.value = "";
}

function calculate() {
    try {
        field.value = eval(field.value);
    } catch (err) {
        field.value = "Error";
    }
}
