//Funciones
export function jugadaPrograma() {
    let num = Math.floor(Math.random() * 3) + 1;
    let jugada = "";

    if (num == 1) {
        jugada = "piedra";
    } else if (num == 2) {
        jugada = "papel";
    } else if (num == 3) {
        jugada = "tijera";
    }

    return jugada
}

export function evaluarJugada(usuario, programa) {
    let resultado = "";
    if (
        (usuario=="piedra" && programa=="piedra") ||
        (usuario=="papel" && programa=="papel") ||
        (usuario=="tijera" && programa=="tijera")
    ) {
        resultado = "Empate!";
    } else if (
        (usuario=="piedra" && programa=="tijera") ||
        (usuario=="papel" && programa=="piedra") ||
        (usuario=="tijera" && programa=="papel")
    ) {
        resultado = "El usuario gana!";
    } else if (
        (programa=="piedra" && usuario=="tijera") ||
        (programa=="papel" && usuario=="piedra") ||
        (programa=="tijera" && usuario=="papel")
    ) {
        resultado = "El programa gana!";
    }
    return resultado;
}