//Funciones
export function contarTexto(texto, numero) {
    for (let i=1; i<=numero; i++) {
        const p = document.createElement("p");
        const resultado = document.getElementById("resultado");
        
        p.textContent = `${i}- ${texto}`;
        resultado.appendChild(p);
        console.log('hola')
    }
}

export function resetearInputs() {
    texto.value = "";
    numero.value = "";
}
export function resetearTextos() {
    let p = resultado.querySelectorAll("p");
    p.forEach(p => p.remove());
}