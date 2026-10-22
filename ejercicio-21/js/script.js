// Implementa aquí tu solución.

// Calculadora
const num_uno = document.getElementById("num_uno");
const num_dos = document.getElementById("num_dos");
const operador = document.getElementById("operador");
const inputTotal = document.getElementById("total");
const btn = document.getElementById("btn");
const resul = document.getElementById("resultado");

//Función para realizar el cálculo matemático
function calcular(n1, n2, op) {
    let resultado = 0;

    if (op === "+") {
        resultado = n1 + n2;
    } else if (op === "-") {
        resultado = n1 - n2;
    } else if (op === "*") {
        resultado = n1 * n2;
    } else if (op === "/") {
        resultado = n1 / n2;
    }

    return resultado;
}

//Función para agregar el elemento p con el total al contenedor
function agregarHistorial(resultado) {
    const p = document.createElement("p");
    p.textContent = `El resultado es: ${resultado}`;
    resul.appendChild(p);
}

//Función para resetear valores
function resetear() {
    num_uno.value = "";
    num_dos.value = "";
    inputTotal.value = "";
}

//Evento del botón
btn.addEventListener('click', () => {
    const n1 = parseFloat(num_uno.value);
    const n2 = parseFloat(num_dos.value);
    const op = operador.value;

    if (isNaN(n1) || isNaN(n2)) {
        console.log("Por favor, ingresa números válidos.");
        return;
    }

    const resultadoFinal = calcular(n1, n2, op);
    inputTotal.value = resultadoFinal;
    agregarHistorial(resultadoFinal);
    resetear();
});



