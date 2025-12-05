// Agregar texto al display
function appendToDisplay(value) {
    const display = document.getElementById("display");

    // Si el display contiene solo "0", reemplazar
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Limpiar el display
function clearDisplay() {
    document.getElementById("display").value = "0";
}

// Borrar último carácter
function deleteChar() {
    const display = document.getElementById("display");

    if (display.value.length <= 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calcular el resultado
function calculate() {
    const display = document.getElementById("display");

    try {
        // Convertir x -> *
        let operation = display.value.replace(/x/g, "*");

        display.value = eval(operation);
    } catch {
        display.value = "Error";
    }
}





