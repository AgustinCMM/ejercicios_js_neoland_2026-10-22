// Implementa aquí tu solución.
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const p = document.createElement("p");

btn.addEventListener('click', ()=> {
    btn.disabled = true;
    p.textContent = "Has deshabilitado el botón. Que bonito... Y ahora?"
    resultado.appendChild(p);
})