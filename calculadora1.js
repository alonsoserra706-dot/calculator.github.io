// Agregar texto al display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Limpiar el display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Calcular el resultado
function calculate() {
    const display = document.getElementById("display");

    try {
        // eval evalúa la operación escrita (ej: "5+3*2")
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
    function deleteChar() {
        if (display.innerText.length === 1) {
            display.innerText = "0";
        } else {
            display.innerText = display.innerText.slice(0, -1);
        }
    }

}
