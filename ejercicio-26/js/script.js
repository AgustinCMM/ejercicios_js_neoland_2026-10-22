// Implementa aquí tu solución.
import { calcularLetras } from "./functions.js";

const texto = document.getElementById("texto");
const letras = document.getElementById("letras");

texto.addEventListener('input', ()=> {
    let cantLetras = calcularLetras(texto.value);
    letras.textContent = `El texto introducido tiene ${cantLetras} caracteres`
})