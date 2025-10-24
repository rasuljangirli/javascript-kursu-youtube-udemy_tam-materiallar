
const form = document.getElementById("todoForm");
const input = document.getElementById("txtTaskName");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    e.preventDefault();
    let inputValue = input.value.trim();

    if (inputValue !== "") {
        let todo = {
            id: Math.floor(Math.random() * 100000),
            content: inputValue
        }

        addTodoUI(todo);

        input.value = "";

    } else {
        alert("Bos deyer daxil etmisiz");
    }

}


function addTodoUI(todo) {

    const li = document.createElement("li");
    li.className = "task list-group-item d-flex justify-content-between align-items-center";
    li.setAttribute("data-id", todo.id);

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.content;

    const div = document.createElement("div");

    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen me-2";

    const removeIcon = document.createElement("i");
    removeIcon.className = "fa-solid fa-trash-can";

    div.appendChild(editIcon);
    div.appendChild(removeIcon);

    li.appendChild(span);
    li.appendChild(div);

    taskList.appendChild(li);
};

function addTodoStorage() {

}