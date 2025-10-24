const form = document.getElementById("todoForm");
const input = document.getElementById("txtTaskName");
const taskList = document.getElementById("task-list");
const firstCard = document.querySelectorAll(".card")[0];
const clearButton = document.querySelector("#btnClear");

let todos = [];
let statusTodo = null;

run();

function run() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadedTodos);
    taskList.addEventListener("click", handleTodoAction);
    clearButton.addEventListener("click", clearAllTodos);
};

//? Local storageden todolari UI-a elave etmek
function loadedTodos() {
    checkTodos();

    if (todos.length > 0) {
        todos.forEach(function (todo) {
            addTodoUI(todo);
        });
    };
};

function handleTodoAction(e) {
    if (e.target.classList.contains("fa-pen")) {
        updateTodo(e);
    } else if (e.target.classList.contains("fa-trash-can")) {
        deleteTodo(e);
    };
};

//? Todo elave etmek
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
            updateTodoStorage(inputValue);
            input.value = "";
            statusTodo = null;
            showAlert("info", "Todo Update edildi");
        }

    } else {
        statusTodo = null;
        showAlert("danger", "Boş deyer daxil edile bilmez");
    };
};

//? UI todo elave edilmesi 
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

//? Local storage todo elave etmek
function addTodoStorage(todo) {
    checkTodos();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

};

//? Todo update edilmesi
function updateTodo(e) {
    let selectedElement = e.target.parentElement.parentElement;

    input.value = "";
    input.focus();

    input.value = selectedElement.textContent.trim();
    statusTodo = Number(selectedElement.getAttribute("data-id"));
};

//? Todonun  UI-da update edilmesi
function updateTodoUI(inputValue) {
    let todoElement = document.querySelector(`[data-id="${statusTodo}"]`);

    let textTodoElement = todoElement.querySelector(".todo-text");

    textTodoElement.textContent = inputValue;
};

//? Todonun Storagede update edilmesi
function updateTodoStorage(inputValue) {
    checkTodos();

    if (todos !== null) {
        todos.forEach(function (todo) {
            if (statusTodo === todo.id) {
                todo.content = inputValue;
            };
        });

        localStorage.setItem("todos", JSON.stringify(todos));
    };
};

//? Todonun silinmesi
function deleteTodo(e) {
    const selectedElement = e.target.parentElement.parentElement;
    let deletedElementId = Number(selectedElement.getAttribute("data-id"));

    deleteTodoUI(deletedElementId);
    deleteTodoStorage(deletedElementId);
    showAlert("info", "Todo Silindi");
};

//? Todonun UI-dan silinmesi
function deleteTodoUI(deletedElementId) {

    let elements = document.querySelectorAll(".task");

    elements.forEach(function (element) {
        if (deletedElementId === Number(element.getAttribute("data-id"))) {
            element.remove();
        };
    });
};

//? Todonun Storage-den silinmesi
function deleteTodoStorage(deletedElementId) {
    checkTodos();

    todos.forEach(function (todo, index) {
        if (todo.id === deletedElementId) {
            todos.splice(index, 1);
        };
    });
    localStorage.setItem("todos", JSON.stringify(todos));

};

//? Butun Todolarin silinmesi
function clearAllTodos() {
    if (todos.length === 0) {
        showAlert("danger", "En az bir eded Todo olmalidir");
        return;
    };
    clearAllTodosUI();
    clearAllTodosStorage();
    showAlert("info", "Butun todolar silindi");
};

//? Butun Todolarin UI-dan silinmesi
function clearAllTodosUI() {
    let elements = document.querySelectorAll(".task");

    elements.forEach(function (todo) {
        todo.remove();
    });
};

//? Butun Todolarin Storage-den silinmesi
function clearAllTodosStorage() {
    todos.splice(0, todos.length);
    localStorage.setItem("todos", JSON.stringify(todos));
};

//? Localda olan todolari yoxlamaq
function checkTodos() {
    let todosLocal = JSON.parse(localStorage.getItem("todos"));

    if (todosLocal !== null) {
        todos = todosLocal;
    } else {
        todos = [];
    };
};

//? Alert gostermek
function showAlert(color, text) {
    const div = document.createElement("div");
    div.className = `alert alert-${color}`;
    div.role = "alert";
    div.textContent = text;

    firstCard.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1500);
};