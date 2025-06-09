const display = document.getElementById("display");

function keys(value) {
    display.value += value;
}

function del() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function calc() {
    try {
        display.value = eval(display.value);
    } 
    catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}