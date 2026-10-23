//Funciones
export function validarAcceso(texto) {
    if (texto.trim() === "JavaScript") {
        return "Acceso concedido";
    } else {
        return "Acceso denegado";
    }
}