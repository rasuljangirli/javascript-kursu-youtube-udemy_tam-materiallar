
//! keyboard events


// key code keyCode which getModifierState()

//? keypress

// document.addEventListener("keypress", logEvent);

// function logEvent(e) {
//     console.log(e.which);
//     console.log(e.key);

// }

//? keydown

// document.addEventListener("keydown", logEvent);
// function logEvent(e) {
//     console.log(e.key);
//     console.log(e.code);
// }


//? keyup

// document.addEventListener("keyup", logEvent);
// function logEvent(e) {
//     console.log(e);
// }


document.addEventListener("keydown", handleArrowKeys);
let x = 0, y = 0;

let cube = document.getElementById("cube");

function handleArrowKeys(e) {

    // console.log(e.code);
    if (e.code == "ArrowUp") y -= 10;
    if (e.code == "ArrowDown") y += 10;
    if (e.code == "ArrowLeft") x -= 10;
    if (e.code == "ArrowRight") x += 10;

    cube.style.transform = `translate(${x}px, ${y}px)`;
}















