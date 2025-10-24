
import { display } from "./dom.js";

function appendInput(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    const expression = display.value;

    try {

        if (/\/0(?!\d)/.test(expression)) {
            throw new Error("0-a bolme yoxdur")
        }

        const result = math.evaluate(expression);

        display.value = result;
    } catch (error) {

        if (error.message === "0-a bolme yoxdur") {
            display.value = error.message

        } else {
            display.value = "Error"
        }

    }
}

export { appendInput, clearDisplay, deleteLastChar, calculate }
