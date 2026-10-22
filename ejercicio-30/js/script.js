// Implementa aquí tu solución.
// Incorpora aquí la salida solicitada en consola.
const btn = document.getElementById("btn");

(() => {
    btn.addEventListener('click', () => {
        let btnText = btn.textContent;
        console.log(btnText);
    });
})();