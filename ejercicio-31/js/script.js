import { calcularEdad, calcularMayorEdad } from "./functions.js";

// Implementa aquí tu solución.
const nacimiento = document.getElementById("ano-nacimiento");
const actual = document.getElementById("ano-actual");
const mensaje = document.getElementById("mensaje");

(()=> {
    nacimiento.addEventListener('input', ()=> {
        let anoNacimiento = nacimiento.value;
        let anoActual = actual.value;
        let edad = calcularEdad(anoNacimiento, anoActual);
        mensaje.textContent = calcularMayorEdad(edad);
    })
})();