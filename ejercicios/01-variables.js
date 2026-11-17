const nombre = "Facundo";
let edad = 26;
edad = 27;



const texto = "Hola";          // string
const numero = 42;             // number (enteros y decimales son lo mismo)
const decimal = 3.14;          // number
const activo = true;           // boolean
const vacio = null;            // null: "vacío a propósito"
let sinValor;                  // undefined: "todavía no tiene nada"
const usuario = { nombre: "Facu", edad: 30 };  // object
const lista = [1, 2, 3];       // array (que en realidad es un object)

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof activo);
console.log(typeof sinValor);
console.log(typeof usuario);
console.log(typeof lista);
console.log(typeof vacio);     // 👀 atención a este

const producto = "Café";
const precio = 1500;

// ❌ Forma vieja
console.log("El " + producto + " cuesta $" + precio);

// ✅ Forma moderna, con comillas invertidas ` `
console.log(`El ${producto} cuesta $${precio}`);
console.log(`Con IVA: $${precio * 1.21}`);