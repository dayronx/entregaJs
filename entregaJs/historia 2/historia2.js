const productos = [
    { id: generarId(), nombre: "Zapato",   precio: 120000 },
    { id: generarId(), nombre: "Camisa",   precio: 45000 },
    { id: generarId(), nombre: "Pantalón", precio: 80000 },
    { id: generarId(), nombre: "Reloj",    precio: 200000 },
    { id: generarId(), nombre: "Gorra",    precio: 25000 }
];

let opcion;


do {
    opcion = Number(prompt(
        "MENÚ \n" +
        "1. Agregar producto\n" +
        "2. Mostrar productos\n" +
        "3. Eliminar producto\n" +
        "4. Salir"
    ));

    switch (opcion) {

        case 1: {
            const nombre = pedirNombre();
            const precio = pedirNumero("Ingrese el precio del producto:");

            const producto = {
                id: generarId(),
                nombre,
                precio
            };

            if (!validarProducto(producto)) break;

            productos.push(producto);
            alert("Producto agregado correctamente");
            break;
        }

        case 2: {
            if (productos.length === 0) {
                alert("No hay productos para mostrar");
                break;
            }

            let salida = "LISTA DE PRODUCTOS\n\n";

            productos.forEach((p, index) => {
                salida +=
                    `Producto ${index + 1}\n` +
                    `${p.nombre}\n` +
                    `${p.precio}\n` +
                    `${p.id}\n\n`;
            });

            alert(salida);
            demoSet();
            demoForIn(productos[0]);
            demoMap(productos);

            break;
        }
        case 3: {
            if (productos.length === 0) break;

            let lista = "Escribe le numero del producto a eliminar:\n\n";
            productos.forEach((p, i) => {
                lista += `${i + 1}. ${p.nombre} (${p.id})\n`;
            });

            const indice = pedirNumero(lista) - 1;

            if (productos[indice]) {
                productos.splice(indice, 1);
            }
            break;
        }

        case 4:
            break;
    }

} while (opcion !== 4);
