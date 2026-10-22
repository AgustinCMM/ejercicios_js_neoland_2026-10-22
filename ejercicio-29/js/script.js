// Implementa aquí tu solución.
import { contarTexto, resetearInputs, resetearTextos } from "./functions.js";

const texto = document.getElementById("texto");
const numero = document.getElementById("numero");
const btnEnviar = document.getElementById("btn-enviar");

btnEnviar.addEventListener('click', ()=> {
    resetearTextos();
    let txt = texto.value;
    let num = numero.value;
    contarTexto(txt, num);
    resetearInputs();
});