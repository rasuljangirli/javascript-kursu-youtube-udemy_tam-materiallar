
//! Bura qədər gəlmisənsə özünlə qürur duya bilərsən. Bu formada davam et ki sonda daha böyük qürur hissini yaşayasan.

//? Selectorlardan istifadə edərək elemet seçin.

// const div = document.querySelector(".card-body");
// const input = document.getElementById("txtTaskName");
// console.log(input)


//? Element yarat və əlavə et

/*
                        <li class="task list-group-item d-flex justify-content-between align-items-center">

                            <span class="todo-text">Todo 1</span>

                            <div>
                                <button class="btn btn-primary btn-sm me-2">

                                    <i class="fa-solid fa-pen"></i>

                                </button>

                                <button class="btn btn-danger btn-sm">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </li>
*/

// const ul = document.getElementById("task-list");

// let li = document.createElement("li");
// li.className = "task list-group-item d-flex justify-content-between align-items-center";

// let span = document.createElement("span");
// span.className = "todo-text";
// span.textContent = "Todo 6";

// let div = document.createElement("div");

// let button1 = document.createElement("button");
// button1.className = "btn btn-primary btn-sm me-2";

// let iEdit = document.createElement("i");
// iEdit.className = "fa-solid fa-pen";

// let button2 = document.createElement("button");
// button2.className = "btn btn-danger btn-sm";

// let iDelete = document.createElement("i");
// iDelete.className = "fa-solid fa-trash-can";

// button2.appendChild(iDelete);
// button1.appendChild(iEdit);

// div.appendChild(button1);
// div.appendChild(button2);

// li.appendChild(span);
// li.appendChild(div);

// ul.appendChild(li);


//? Class adı əlavə edin

// const ul = document.getElementById("task-list");
// ul.classList.add("newClass");
// console.log(ul.classList);

//? Element sil
// const ul = document.getElementById("task-list");
// ul.remove();


//? Elementlərə css ozellikleri ver

// const li = document.getElementsByClassName("task");
// console.log(li)
// li[0].style.backgroundColor = "red";

//? tək indexli elementləri silin cütlərə isə css əlavə edin.

// const items = document.getElementsByClassName("task");

// Array.from(items).forEach(function (item, index) {
//     if (index % 2 === 1) {
//         item.remove();
//     } else {
//         item.style.backgroundColor = "pink";
//     }
// })
// console.log(items)




















