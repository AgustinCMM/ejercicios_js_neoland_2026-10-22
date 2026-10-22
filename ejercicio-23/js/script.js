// Implementa aquí tu solución.
const btnAumentar = document.getElementById("btn-aumentar");
const btnDisminuir = document.getElementById("btn-disminuir");
const h1Num = document.getElementById("h1-num");

//Función para incrementar el valor
function aumentar() {
    let num = parseInt(h1Num.textContent);
    num++;
    h1Num.textContent = num;
}

//Función para disminuir el valor
function disminuir() {
    let num = parseInt(h1Num.textContent);
    num--;
    h1Num.textContent = num;
}

//Eventos de click
btnAumentar.addEventListener('click', () => {
    aumentar();
});
btnDisminuir.addEventListener('click', () => {
    disminuir();
});