//Funciones
export function calcularEdad(nacimiento, actual) {
    let edad = actual - nacimiento;
    return edad;
}
export function calcularMayorEdad(edad) {
    let mensaje = "";
    if (edad < 18) {
        mensaje = "Es menor de edad";
        if (edad < 0) {
            mensaje = "Mmmmm... Algo no está muy bien...";
        }
    } else if (edad == 18) {
        mensaje = "Si ya cumplió años este año, es mayor de edad; Si no los cumplió aún, es menor de edad.";
    } else if (edad > 18) {
        mensaje = "Es mayor de edad";
        if (edad > 150) {
            mensaje = "Emmm... No creo que tengas tantos años...";
        }
    }
    return mensaje;
}