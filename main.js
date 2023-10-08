document.addEventListener("DOMContentLoaded", function () {

    const seccion__productos = document.querySelector(".seccion__productos");
    const seccion__destacados = document.querySelector(".seccion__destacados");
    const botones__ppals = document.querySelectorAll(".bot__ppal");
    const botones__secun = document.querySelectorAll(".bot__sec");
    const tituloProductos = document.querySelector(".titulo__productos")
    let agregarArticulos = document.querySelectorAll(".p__agregar")
    const numCarrito = document.querySelector(".numero__car")




    function mostrarProductos(productosPorCategoria) {
        seccion__productos.innerHTML = "";
        productosPorCategoria.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto")
            div.innerHTML = `
                <img class="producto__img" src="${producto.imagen}" alt="${producto.nombre}">
                <li class="p__nombre">${producto.nombre}</li>
                <li class="p__descripcion">${producto.descripcion}</li>
                <li class="p__precio">$${producto.precio}</li>
                <button class="p__agregar" id="${producto.id}">Agregar</button>
                `;
            seccion__productos.append(div);
        })
        botonAgregar();
    }
    mostrarProductos(productos);

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

        actualizarCarro();

        localStorage.setItem("productosEnCarrito", JSON.stringify(productosCarrito));
    }

    function actualizarCarro() {
        let numCar = productosCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
        numCarrito.innerText = numCar;

    }


    function mostrarDestacados(productosPorCategoria) {
        const indicesAleatorios = [];
        while (indicesAleatorios.length < 5) {
            const indiceAleatorio = Math.floor(Math.random() * productosPorCategoria.length);
            if (!indicesAleatorios.includes(indiceAleatorio)) {
                indicesAleatorios.push(indiceAleatorio);
            }
        }
        seccion__destacados.innerHTML = "";

        indicesAleatorios.forEach(indice => {
            const producto = productosPorCategoria[indice];
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

    mostrarDestacados(productos);
});