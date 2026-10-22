// Implementa aquí tu solución.
import { crearCorreo } from "./functions.js";

const nombre = document.getElementById("nombre");
const empresa = document.getElementById("empresa");
const btnCrear = document.getElementById("btn-crear");
const resultado = document.getElementById("resultado");

btnCrear.addEventListener('click', ()=> {
    let nom = nombre.value;
    let emp = empresa.value;
    if (nom != "" && emp != "") {
        let correo = crearCorreo(nom, emp);
        resultado.textContent = correo;
    } else {
        resultado.textContent = "Ingrese texto válido en ambos campos";
    }
})