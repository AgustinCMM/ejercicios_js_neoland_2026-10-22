// Implementa aquí tu solución.
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

//Función para deshabilitar el botón
function deshabilitarBoton() {
    btn.disabled = true;
    
    const p = document.createElement("p");
    p.textContent = "Has deshabilitado el botón. Que bonito... Y ahora?";
    resultado.appendChild(p);
}

//Evento de click
btn.addEventListener('click', () => {
    deshabilitarBoton();
});