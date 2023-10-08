document.addEventListener("DOMContentLoaded", function () {
    let productosEnCarrito = localStorage.getItem("productosEnCarrito");
    productosEnCarrito = JSON.parse(productosEnCarrito);

    const seccion__carrito = document.querySelector(".seccion__carrito");
    let eliminarArticulos = document.querySelector(".c__eliminar");
    const vaciarCarrito = document.querySelector(".vaciar")
    const mostrarTotal = document.querySelector(".total")
    const numCarrito = document.querySelector(".numero__car")
    function cargarProductos() {
        if (productosEnCarrito) {
            mostrarProductos(productosEnCarrito);
            actualizarEstadoCarritoVacio();
        }
    }

    function mostrarProductos(productosPorCategoria) {
        seccion__carrito.innerHTML = "";
        productosPorCategoria.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `
                <img class="producto__img--car" src=".${producto.imagen}" alt="${producto.nombre}">
                <div class="c__titulo">
                    <h5>Titulo</h5>
                    <h4 class="titulo__h4">${producto.nombre}</h4>
                </div>
                <div class="c__tipo">
                    <h5>Tipo</h5>
                    <h4 class="tipo__h4">${producto.tipo}</h4>
                </div>
                <div class="c__cantidad">
                    <h5>Cantidad</h5>
                    <h4 class="cantidad__h4">${producto.cantidad}</h4>
                </div>
                <div class="c__subtotal">
                    <h5>Subtotal</h5>
                    <h4 class="subtotal__h4">$${producto.precio}</h4>
                </div>
                <div class="c__total">
                    <h5>Total</h5>
                    <h4 class="total__h4">$${producto.precio * producto.cantidad}</h4>
                </div>
                <button class="c__eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
            `;
            seccion__carrito.appendChild(div);
        });
        botonEliminar();
        actualizartTotal();
    }

    function botonEliminar() {
        eliminarArticulos = document.querySelectorAll(".c__eliminar");
        eliminarArticulos.forEach(boton => {
            boton.addEventListener("click", eliminarDelCarrito);
        });
    }

    function eliminarDelCarrito(a) {
        const idProducto = a.currentTarget.id;
        const index = productosEnCarrito.findIndex(producto => producto.id == idProducto);

        productosEnCarrito.splice(index, 1);
        cargarProductos();

        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    }

    cargarProductos();

    vaciarCarrito.addEventListener("click", vaciar);
    function vaciar() {

        productosEnCarrito.length = 0;
        localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
        cargarProductos();
        actualizarEstadoCarritoVacio();
    }
    function actualizartTotal() {
        const totalSuma = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
        mostrarTotal.innerText = `$${totalSuma}`;
        actualizarCarro();
    }
    function actualizarCarro() {
        let numCar = productosEnCarrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
        numCarrito.innerText = numCar;

    }
    function actualizarEstadoCarritoVacio() {
        const carritoVacio = document.querySelector(".carrito__vacio");
        if (productosEnCarrito && productosEnCarrito.length === 0) {

            carritoVacio.style.display = "block";
        } else {

            carritoVacio.style.display = "none";
        }
    }
});


