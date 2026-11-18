function precioConIva(precio) {
    return precio * 1.21;
}

const total = precioConIva(1000);
console.log(`Total a pagar: $${total}`);