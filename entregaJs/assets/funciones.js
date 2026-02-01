// ===============================
// SOLO NÚMEROS
// ===============================
function pedirNumero(mensaje) {
    let valor;
    do {
        valor = prompt(mensaje);
        valor = Number(valor);
    } while (Number.isNaN(valor));
    return valor;
}

// ===============================
// PEDIR TEXTO
// ===============================
function pedirTexto(mensaje) {
    let texto;
    do {
        texto = prompt(mensaje);
    } while (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(texto));
    return texto;
}

// ===============================
// GENERAR ID 
// ===============================
let contadorId = 1;
function generarId() {
    return `76-S-${contadorId++}`;
}

// ===============================
// VALIDAR PRODUCTO
// ===============================
function validarProducto(producto) {
    return (
        typeof producto.id === "string" &&
        typeof producto.nombre === "string" &&
        typeof producto.precio === "number" &&
        !Number.isNaN(producto.precio)
    );
}

// ===============================
// PEDIR NOMBRE
// ===============================
function pedirNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese el nombre del producto:");
    } while (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre));
    return nombre;
}


function demoSet() {
    const numeros = new Set([1, 2, 3, 3, 4, 4, 5]);
    console.log(numeros);
    numeros.add(6);
    console.log(numeros.has(3));
    numeros.delete(2);
    for (const n of numeros) console.log(n);
    return numeros;
}


function demoMap(productos) {
    const map = new Map();
    productos.forEach(p => map.set("General", p.nombre));
    map.forEach((v, k) => console.log(k, v));
    return map;
}


function demoForIn(producto) {
    for (const prop in producto) {
        console.log(prop, producto[prop]);
    }
}


