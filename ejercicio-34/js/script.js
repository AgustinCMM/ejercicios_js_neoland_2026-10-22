// Implementa aquí tu solución.
const inputTexto = document.getElementById("texto");
const btnAnadir = document.getElementById("btn-anadir");
const pLista = document.getElementById("lista");

let textoAcumulado = "";

btnAnadir.addEventListener('click', () => {
    let valor = inputTexto.value.trim(); // .trim() elimina espacios vacíos al inicio y final

    if (valor !== "") {
        if (textoAcumulado === "") {
            textoAcumulado = valor;
        } else {
            textoAcumulado += " - " + valor;
        }
        
        pLista.textContent = textoAcumulado;

        inputTexto.value = "";
    }
});