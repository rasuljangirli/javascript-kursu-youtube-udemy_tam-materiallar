

// addEventListener();


// removeEventListener();


const button = document.getElementById("btnClear");


button.addEventListener("click", helloMethod);

let a = 100;
let b = 20;

if (b > a) {

    button.removeEventListener("click", helloMethod);

}

function helloMethod() {

    console.log("Hello method");
}


// button.onclick = function hello() {
//     console.log("Hello Function");
// }


















