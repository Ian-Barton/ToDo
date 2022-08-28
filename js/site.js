//Get Values
function getValues() {
    let task = document.getElementById("tasks").value;
    let text = document.createTextNode(task);
    let task_el = document.createElement("li");
    task_el.classList.add("list-group");
    task_el.appendChild(text);
    display(task_el);
}
//Set Logic
function createTask() {
}
function display(task_el) { 
    let task_li = document.getElementById("list");
    task_li.appendChild(task_el);
}
