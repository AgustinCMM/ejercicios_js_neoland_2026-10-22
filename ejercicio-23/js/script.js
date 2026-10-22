// Implementa aquí tu solución.
const btnAumentar = document.getElementById("btn-aumentar");
const btnDisminuir = document.getElementById("btn-disminuir");
const h1Num = document.getElementById("h1-num");

btnAumentar.addEventListener('click', ()=> {
    let num = parseInt(h1Num.textContent);
    num++;
    h1Num.textContent = `${num}`;
})
btnDisminuir.addEventListener('click', ()=> {
    let num = parseInt(h1Num.textContent);
    num--;
    h1Num.textContent = `${num}`;
})