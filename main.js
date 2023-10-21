document.addEventListener("DOMContentLoaded", function () {
    const seccion__productos = document.querySelector(".seccion__productos");
    const seccion__destacados = document.querySelector(".seccion__destacados");
    const botones__ppals = document.querySelectorAll(".bot__ppal");
    const botones__secun = document.querySelectorAll(".bot__sec");
    const tituloProductos = document.querySelector(".titulo__productos");
    let agregarArticulos = document.querySelectorAll(".p__agregar");
    const numCarrito = document.querySelector(".numero__car");

    let productos;

    // MOSTRAR LOS PRODUCTOS DEL STOCK.JSON MEDIANTE FETCH//

    fetch("./stock.json")
        .then(response => response.json())
        .then(data => {
            productos = data.productos;
            mostrarProductos(productos);
            mostrarDestacados();
        });

    function mostrarProductos(productosPorCategoria) {
        if (!productosPorCategoria) return;
        seccion__productos.innerHTML = "";
        productosPorCategoria.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto__img" src="${producto.imagen}" alt="${producto.nombre}">
                <li class="p__nombre">${producto.nombre}</li>
                <li class="p__descripcion">${producto.descripcion}</li>
                <li class="p__precio">$${producto.precio}</li>
                <button class="p__agregar" id="${producto.id}">Agregar</button>
                `;
            seccion__productos.append(div);
        });
        botonAgregar();
    }
    mostrarProductos(productos);

    // MOSTRAR PRODUCTOS SEGUN LA CATEGORIA//

    botones__ppals.forEach(boton => {
        boton.addEventListener("click", function (a) {
            const categoriaSeleccionada = boton.textContent.trim().toUpperCase();
            const productosFiltrados = productos.filter(producto => producto.categoria.toUpperCase() === categoriaSeleccionada);

            tituloProductos.innerText = categoriaSeleccionada;
            mostrarProductos(productosFiltrados);
        });
    });
    botones__secun.forEach(boton => {
        boton.addEventListener("click", function () {
            const categoriaSeleccionada = boton.textContent.trim().toUpperCase();
            const productosFiltrados = productos.filter(producto => producto.tipo.toUpperCase() === categoriaSeleccionada);

            tituloProductos.innerText = categoriaSeleccionada;

            mostrarProductos(productosFiltrados);
        });
    });

    // AGREGAR PRODUCTOS AL CARRITO//

    function botonAgregar() {
        agregarArticulos = document.querySelectorAll(".p__agregar")
        agregarArticulos.forEach(boton => {
            boton.addEventListener("click", agregarAlCarrito);
        });
    }

    let productosCarrito = [];

    let productosEnCarrito = localStorage.getItem("productosEnCarrito");

    if (productosEnCarrito) {
        productosCarrito = JSON.parse(productosEnCarrito);
        actualizarCarro();
    } else {
        productosEnCarrito = [];
    }

    function agregarAlCarrito(a) {

        const idProducto = a.currentTarget.id;
        const agregados = productos.find(producto => producto.id == idProducto);

        if (productosCarrito.some(producto => producto.id == idProducto)) {
            const index = productosCarrito.findIndex(producto => producto.id == idProducto);
            productosCarrito[index].cantidad++;
        } else {
            agregados.cantidad = 1;
            productosCarrito.push(agregados);
        }

        // NOTIFICACION LATERAL AL AGREGAR PRODUCTOS CON TOASTIFY//

        Toastify({
            text: "Agregado al Carrito",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#ec0000",
                borderRadius: ".5em",
                fontSans: "Inter var",
            },
            offset: {
                x: "1rem",
                y: "5rem",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        actualizarCarro();

        localStorage.setItem("productosEnCarrito", JSON.stringify(productosCarrito));
    }

    // ACTUALIZAR CANTIDAD DE PRODUCTOS EN EL ICONO DEL CARRITO//   

    function actualizarCarro() {
        let numCar = productosCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
        numCarrito.innerText = numCar;

    }

    // MOSTRAR TODOS LOS PRODUCTOS DESTACADOS DE MANERA RANDOM//

    function mostrarDestacados() {
        if (!productos) {
            setTimeout(mostrarDestacados, 100);
            return;
        }

        const indicesAleatorios = [];
        while (indicesAleatorios.length < 5) {
            const indiceAleatorio = Math.floor(Math.random() * productos.length);
            if (!indicesAleatorios.includes(indiceAleatorio)) {
                indicesAleatorios.push(indiceAleatorio);
            }
        }
        seccion__destacados.innerHTML = "";

        indicesAleatorios.forEach(indice => {
            const producto = productos[indice];
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto__img" src="${producto.imagen}" alt="${producto.nombre}">
                <li class="p__nombre">${producto.nombre}</li>
                <li class="p__descripcion">${producto.descripcion}</li>
                <li class="p__precio">$${producto.precio}</li>
                <button class="p__agregar" id="${producto.id}">Agregar</button>
            `;
            seccion__destacados.append(div);
        });

        botonAgregar();
    }

    mostrarDestacados();
});