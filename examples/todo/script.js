const body = document.getElementById("BODY");
let input = document.getElementById("INPUT");

let task;
let text;
let btn;
let div;
let i = 0;

function addTask() {

    // creates "div" for the task
    task = document.createElement("div");
    task.setAttribute("class", "task");
    task.setAttribute("id", `${i}`);
    body.appendChild(task);

    // creates "p" for the task
    text = document.createElement("p");
    text.setAttribute("class", "text");
    text.textContent = input.value;
    task.appendChild(text);

    // creates "button" for the task
    btn = document.createElement("button");
    btn.setAttribute("class", "delete");
    btn.setAttribute("onclick", `delTask(${i})`);
    btn.textContent = "X";
    task.appendChild(btn);
    
    // clears the input
    input.value = null;

    // increments "id" for new tasks
    if (true) {
        i++;
    }
}

function delTask(id) {
    div = document.getElementById(id);
    div.remove();
}
