
import { appendInput, calculate, clearDisplay, deleteLastChar } from "./calculator.js";
import { buttons, clearButton, deleteButton, equalButton } from "./dom.js";

export default function run() {
    handleDisplay();
    clearDisplayContent();
    deleteLastCharDisplay();
    calculateFormul();
}

function handleDisplay() {

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.classList.contains("btn-clear") && !button.classList.contains("btn-delete") && !button.classList.contains("btn-equal")) {
                appendInput(button.textContent)
            }
        })
    })

}

function clearDisplayContent() {
    clearButton.addEventListener("click", clearDisplay);
}

function deleteLastCharDisplay() {
    deleteButton.addEventListener("click", deleteLastChar)
}

function calculateFormul() {
    equalButton.addEventListener("click", calculate)
}