
const form = document.getElementById("todoForm");
const firstCard = document.getElementsByClassName("card")[0];
const input = document.getElementById("txtTaskName");
const taskList = document.getElementById("task-list");
const clearButton = document.getElementById("btnClear");

let todos = [];
let statusTodo = null;

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadedTodos);
    taskList.addEventListener("click", handleTodoAction);
    clearButton.addEventListener("click", clearAllTodos);
};

// Ilk yuklemede localda olan todolarin ekranda gosterilmesi
function loadedTodos() {
    checkTodos();

    if (todos !== null) {
        todos.forEach(function (todo) {
            addTodoUI(todo);
        })
    }
}

// update ve ya delete yonlendirmesi
function handleTodoAction(e) {
    if (e.target.classList.contains("fa-pen")) {
        updateTodo(e);
    } else if (e.target.classList.contains("fa-trash-can")) {
        deletedTodo(e);
    };
}

// Todonun elave edilemsi
function addTodo(e) {
    e.preventDefault();
    let todoText = input.value.trim();

    if (todoText !== "") {
        if (statusTodo === null) {
            const todo = {
                id: Math.floor(Math.random() * 10000000),
                content: todoText
            }
            // Ui elave edildi
            addTodoUI(todo);
            //Storage todo elave edilmesi
            addTodoStorage(todo);
            input.value = "";
            showAlert("info", "Todo Elave edildi");

        } else {
            updateTodoUI(todoText);
            updateTodoStorage(todoText);
            input.value = "";
            statusTodo = null;
            showAlert("info", "Todo Update Edildi");
        }

    } else {
        showAlert("danger", "Boş dəyər daxil edilə bilməz")
    };
};

// Todonun UI-a elave edilmesi
function addTodoUI(todo) {
    const li = document.createElement("li");
    li.className = "task list-group-item d-flex justify-content-between align-items-center";
    li.setAttribute("data-id", todo.id);

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = `${todo.content}`;

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
}

// Todolarin storage elave edilmesi
function addTodoStorage(todo) {
    checkTodos();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Storage-de todo olub olmamasini yoxlamaq
function checkTodos() {
    const todosLocalStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosLocalStorage !== null) {
        todos = todosLocalStorage;
    } else {
        todos = [];
    }
}

// todonun update edilmesi
function updateTodo(e) {
    let selectedElement = e.target.parentElement.parentElement;
    input.value = "";
    input.focus();
    input.value = selectedElement.textContent.trim();
    statusTodo = Number(selectedElement.getAttribute("data-id"));
}

//Todonun UI-da update edilmesi
function updateTodoUI(todoText) {
    const todoElement = document.querySelector(`[data-id="${statusTodo}"]`);
    const todoTextElement = todoElement.querySelector(".todo-text");

    todoTextElement.textContent = todoText;
}

//Todonun Storagede update edilmesi
function updateTodoStorage(todoText) {
    checkTodos();

    todos.forEach(function (todo) {
        if (statusTodo === todo.id) {
            todo.content = todoText;
        };
        localStorage.setItem("todos", JSON.stringify(todos));
    });
}

// todonun silinmesi
function deletedTodo(e) {
    const selectedElement = e.target.parentElement.parentElement;
    deleteTodoUI(selectedElement);
    deleteTodoStorage(selectedElement);
    showAlert("info", "Todo Silindi");
}

// todonun UI-dan silinmesi
function deleteTodoUI(deletedTodo) {
    let todoElements = document.querySelectorAll(".task");
    const deletedElementId = Number(deletedTodo.getAttribute("data-id"));
    todoElements.forEach(function (element) {
        if (deletedElementId === Number(element.getAttribute("data-id"))) {
            element.remove();
        };
    });
}

// todonun Storageden silinmesi
function deleteTodoStorage(deletedTodo) {
    checkTodos();
    todos.forEach(function (todo, index) {
        if (todo.id === Number(deletedTodo.getAttribute("data-id"))) {
            todos.splice(index, 1);
        };
        localStorage.setItem("todos", JSON.stringify(todos));
    })
}

// Butun todolarin silinmesi 
function clearAllTodos(e) {
    e.preventDefault();

    if (todos.length === 0) {
        showAlert("danger", "En az bir todo olmalidir");
        return;
    }
    clearAllTodosUI();
    clearAllTodosStorage();

    showAlert("info", "Butun Todolar Silindi");
}

// Butun todolarin UI-dan silinmesi
function clearAllTodosUI() {
    let todoElements = document.querySelectorAll(".task");
    todoElements.forEach(function (element) {
        element.remove();
    })
}

// Butun todolarin Storageden silinmesi
function clearAllTodosStorage() {
    checkTodos();
    todos.splice(0, todos.length);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Bildiris gostermek
function showAlert(color, text) {
    const div = document.createElement("div");
    div.className = `alert alert-${color}`;
    div.role = "alert";
    div.textContent = text;
    firstCard.appendChild(div);

    setTimeout(() => {
        div.remove()
    }, 1000);
}