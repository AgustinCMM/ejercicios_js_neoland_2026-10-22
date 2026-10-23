// Implementa aquí tu solución.
import { validarAcceso } from "./functions.js";

const input = document.getElementById("texto");
const btn = document.getElementById("btn-verificar");
const resultadoP = document.getElementById("mensaje");

btn.addEventListener('click', () => {
    let mensaje = validarAcceso(input.value);
    
    resultadoP.textContent = mensaje;
});