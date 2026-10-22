// Implementa aquí tu solución.
import { evaluarJugada, jugadaPrograma } from "./functions.js";

const usuario = document.getElementById("usuario");
const programa = document.getElementById("programa");
const btnJugar = document.getElementById("btn-jugar");
const mensaje = document.getElementById("mensaje");

btnJugar.addEventListener('click', ()=> {
    if (usuario.value != "") {
        let jugadaDeUsuario = usuario.value;
        let jugadaDePrograma = jugadaPrograma();
        programa.value = jugadaDePrograma;
        let resultado = evaluarJugada(jugadaDeUsuario, jugadaDePrograma);
        mensaje.textContent = resultado;
        usuario.value = "";
    } else {
        mensaje.textContent = "Elige una opción";
    }
});