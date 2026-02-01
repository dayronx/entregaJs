// Arreglo global de notas
let notas = [];

// Guarda el arreglo actual en Local Storage
function guardarEnStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// Carga las notas desde Local Storage
function cargarDesdeStorage() {
    const datos = localStorage.getItem("notas");
    if (datos) {
        notas = JSON.parse(datos);
        console.log(`Se cargaron ${notas.length} notas.`);
    } else {
        console.log("No hay notas previas en el Storage.");
    }
    return notas;
}

// Agrega una nota al arreglo
function agregarNotaArreglo(texto) {
    notas.push(texto);
    guardarEnStorage();
}

// Elimina una nota del arreglo por su índice
function eliminarNotaArreglo(indice) {
    notas.splice(indice, 1);
    guardarEnStorage();
    console.log("Nota eliminada del arreglo.");
}