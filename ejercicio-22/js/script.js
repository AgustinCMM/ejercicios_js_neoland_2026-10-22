// Implementa aquí tu solución.
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

function deshabilitarBoton() {
    btn.disabled = true;
    
    const p = document.createElement("p");
    p.textContent = "Has deshabilitado el botón. Que bonito... Y ahora?";
    resultado.appendChild(p);
}

btn.addEventListener('click', () => {
    deshabilitarBoton();
});