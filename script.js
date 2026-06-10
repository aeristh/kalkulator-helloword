const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
<<<<<<< HEAD
    // Berapapun inputnya, hasil selalu Hello World
=======
>>>>>>> dd2ca17c62e89f5047ad1b0d52e43bdef60392d8
    display.value = "Hello World";
}