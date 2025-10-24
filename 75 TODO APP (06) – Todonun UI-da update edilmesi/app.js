
const form = document.getElementById("todoForm");
const input = document.getElementById("txtTaskName");
const taskList = document.getElementById("task-list");
const firstCard = document.querySelectorAll(".card")[0];
let todos = [];
let statusTodo = null;

run();

function run() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadedTodos);
    taskList.addEventListener("click", handleTodoAction);
}

// Local storageden todolari UI-a elave etmek
function loadedTodos() {
    checkTodos();
    if (todos !== null) {
        todos.forEach(function (todo) {
            addTodoUI(todo);
        })
    }
}

function handleTodoAction(e) {
    if (e.target.classList.contains("fa-pen")) {
        updateTodo(e);
    }
}

// todo elave etmek
function addTodo(e) {
    e.preventDefault();
    let inputValue = input.value.trim();

    if (inputValue !== "") {

        if (statusTodo === null) {
            let todo = {
                id: Math.floor(Math.random() * 100000),
                content: inputValue
            }

            addTodoUI(todo);
            addTodoStorage(todo);

            input.value = "";
            showAlert("info", "Todo elave edildi");
        } else {
            updateTodoUI(inputValue);

            input.value = "";
            statusTodo = null;
            showAlert("info", "Todo Uptade edildi");
        }

    } else {
        showAlert("danger", "Boş deyer daxil edile bilmez");
    };
};

// UI todo elave edilmesi 
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

// local storage todo elave etmek
function addTodoStorage(todo) {
    checkTodos();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

};

// todo update edilmesi
function updateTodo(e) {
    let selectedElement = e.target.parentElement.parentElement;

    input.value = "";
    input.focus();

    input.value = selectedElement.textContent.trim();
    statusTodo = Number(selectedElement.getAttribute("data-id"));
};

// todonun  UI-dan update edilmesi
function updateTodoUI(inputValue) {
    let todoElement = document.querySelector(`[data-id="${statusTodo}"]`);

    let textTodoElement = todoElement.querySelector(".todo-text");

    textTodoElement.textContent = inputValue;
};



//localda olan todolari yoxlamaq
function checkTodos() {
    let todosLocal = JSON.parse(localStorage.getItem("todos"));

    if (todosLocal !== null) {
        todos = todosLocal;
    } else {
        todos = [];
    }
};

// alert gostermek
function showAlert(color, text) {
    const div = document.createElement("div");
    div.className = `alert alert-${color}`;
    div.role = "alert";
    div.textContent = text;

    firstCard.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1500);
}