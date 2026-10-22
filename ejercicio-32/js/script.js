// Implementa aquí tu solución.
import { invertirPalabra } from "./functions.js";

const inputTexto = document.getElementById("texto");
const invertido = document.getElementById("invertido");

inputTexto.addEventListener('input', () => {
    let textoOriginal = inputTexto.value;
    let textoAlReves = invertirPalabra(textoOriginal);
    
    invertido.textContent = textoAlReves;
});