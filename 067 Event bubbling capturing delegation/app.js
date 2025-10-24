
const containerDiv = document.querySelectorAll(".card-body")[0];

const form = document.getElementById("todoForm");

const inputDiv = document.querySelectorAll(".input-group")[0];

const button = document.getElementById("btnAddNewTask");

//? bubbling

// button.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Button");

// })

// inputDiv.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("inputDiv");

// })

// form.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("form");
//     e.stopPropagation();
// })

// containerDiv.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("containerDiv");

// })


//? capturing

// button.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Button");

// }, true)

// inputDiv.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("inputDiv");
//     e.stopPropagation();
// }, true)

// form.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("form");

// }, true)

// containerDiv.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("containerDiv");

// }, true)

//? delegation

const list = document.getElementById("task-list");

list.addEventListener("click", function (e) {

    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.parentElement.remove();
    }
})

