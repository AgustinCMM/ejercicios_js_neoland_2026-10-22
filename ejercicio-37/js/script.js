// Implementa aquí tu solución.
import { actualizarH1 } from "./functions.js";

const h1 = document.getElementById("h1");
const input = document.getElementById("texto");
const btnCambiar = document.getElementById("btn-cambiar");

[input, btnCambiar].forEach(elemento => {
    elemento.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            actualizarH1(h1, input);
        }
    });
});