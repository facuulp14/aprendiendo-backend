function validarTurno(nombreRecibido, horaRecibida, diaRecibido) {
    // 1. Limpiar los datos (igual que ayer)
    const nombre = nombreRecibido.trim();
    const hora = Number(horaRecibida);
    const dia = diaRecibido.toLowerCase();

    // 2. Validar: un if + return por cada regla
    if (nombre === "") {
        return "Error: El nombre no puede estar vacío";
    }
    if (Number.isNaN(hora)) {
        return "Error: no es un numero válido";
    }
    if (hora <= 8 || hora >= 18) {
        return "Error: la hora no es válida";
    }
    if (dia === "domingo") {
        return "Error: no se atiende los domingos";
    }
    return `Turno confirmado para ${nombre} a las ${hora}hs`;
}

// Pruebas
console.log(validarTurno("   ", "10", "lunes"));
console.log(validarTurno("Facundo", "abc", "lunes"));
console.log(validarTurno("Facundo", "20", "lunes"));
console.log(validarTurno("Facundo", "10", "Domingo"));
console.log(validarTurno("Facundo", "10", "lunes"));