// Implementa aquí tu solución.
import { devolverColor } from "./functions.js";

const texto = document.getElementById("texto");
const colores = ["red", "blue", "green"];

//Eventos de click
colores.forEach((nombreColor) => {
    const btn = document.getElementById(nombreColor);

    btn.addEventListener('click', () => {
        let claseColor = devolverColor(nombreColor);
        texto.className = "";
        texto.classList.add(claseColor);
    });
});