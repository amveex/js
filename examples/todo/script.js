const body = document.getElementById("BODY");
let input = document.getElementById("INPUT");

let task;
let text;
let btn;

function addTask() {

    // creates "div" for the task
    task = document.createElement("div");
    task.setAttribute("class", "task");
    body.appendChild(task);

    // creates "p" for the task
    text = document.createElement("p");
    text.setAttribute("class", "text");
    text.textContent = input.value;
    task.appendChild(text);

    // creates "button" for the task
    btn = document.createElement("button");
    btn.setAttribute("class", "delete");
    btn.setAttribute("onclick", "delTask()");
    btn.textContent = "X";
    task.appendChild(btn);
    
    // clears the input
    input.value = null;
}

function delTask() {
    
}
