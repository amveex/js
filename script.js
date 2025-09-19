function pick(num) {
    let value = num;
    let field = document.getElementById("FIELD");

    field.value += value;
}

function reset() {
    let field = document.getElementById("FIELD");

    field.value = null;
}
