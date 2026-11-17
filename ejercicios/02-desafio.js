// Datos que "llegan" de un formulario
const nombre = "Facundo";
const hora = 9;
const dia = "domingo";

// Reglas del turnero:
// 1. El nombre no puede estar vacío
// 2. Se atiende de 8 a 18 (la hora tiene que ser >= 8 y < 18)
// 3. No se atiende los domingos
// Si todo está bien:  "Turno confirmado para Facundo a las 9hs"
// Si algo falla: un mensaje que diga CUÁL regla falló

// TU CÓDIGO
if (!nombre) {
  console.log("El nombre no puede estar vacío");
} else if (hora < 8 || hora >= 18) {
  console.log("La hora no está dentro del horario de atención");
} else if (dia === "domingo") {
  console.log("No se atiende los domingos");
} else {
  console.log(`Turno confirmado para ${nombre} a las ${hora}hs`);
}