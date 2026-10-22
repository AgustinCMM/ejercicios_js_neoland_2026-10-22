//Funciones
export function crearCorreo(nombre, empresa) {
    let nombreLimpio = nombre
        .toLowerCase()
        .normalize("NFD")                  // Separa las tildes de las letras
        .replace(/[\u0300-\u036f]/g, "")   // Elimina las marcas de acentuación (tildes)
        .replaceAll(" ", "");

    let empresaLimpia = empresa
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "");
    
    let correo = `${nombreLimpio}@${empresaLimpia}.com`;
    
    return correo;
}