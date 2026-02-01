
const inputNota = document.getElementById("inputNota");
const btnAgregar = document.getElementById("btnAgregar");
const listaUl = document.getElementById("listaNotas");


console.log("Referencias:", { inputNota, btnAgregar, listaUl });

function renderizarNotas() {
    listaUl.innerHTML = ""; 
    
    const notasCargadas = cargarDesdeStorage();
    
    notasCargadas.forEach((texto, index) => {
        const li = document.createElement("li");
        li.classList.add("tarjeta-nota");
        li.textContent = texto + " ";

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        
        btnEliminar.onclick = () => {
            eliminarNotaArreglo(index);
            renderizarNotas();
            console.log("Elemento removido del DOM.");
        };

        li.appendChild(btnEliminar);
        listaUl.appendChild(li);
    });
}


btnAgregar.addEventListener("click", () => {
    const texto = inputNota.value.trim();

    if (texto === "") {
        alert("¡La nota no puede estar vacía!");
        return;
    }

    agregarNotaArreglo(texto);
    renderizarNotas();
    
    console.log("Se agregó la nota:", texto);
    
    inputNota.value = "";
    inputNota.focus();
});


document.addEventListener("DOMContentLoaded", renderizarNotas);