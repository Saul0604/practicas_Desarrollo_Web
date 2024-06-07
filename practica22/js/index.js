let listaProductos = document.querySelector("#listaProductos"); //esto es igual al document.getElementById
let productosCarrito = document.getElementById("productosCarrito");
let verCarrito = document.getElementById("carrito");
let subtotal = document.getElementById("subtotal");
let carrito = [];
const themeSwitchCheckbox = document.querySelector('.theme-switch__checkbox');

const URL = "https://fakestoreapi.com/products"

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeSwitchCheckbox.checked = true;
    }

    themeSwitchCheckbox.addEventListener('change', function () {
        if (themeSwitchCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
});

function cerrarModal(){
    const modalElement = document.querySelector("#carrito");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}

fetch(URL)
    .then(response => response.json())
    .then(productosObtenidos => {
        listaProductos.innerHTML = "";
        productosObtenidos.forEach((producto, indice) => {
            listaProductos.innerHTML += `
            <div class="col-12 col-md-3 py-5">
                <div class="card">
                    <img src="${producto.image}" class="imagenProducto card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title.slice(0,20)}</h5>
                        <p class="card-text">${producto.description.slice(0,70)}</p>
                        <p class="card-text text-danger">${producto.price}</p>
                        <a href="#" class="btn btn-outline-primary" data-id="${producto.id}">Añadir al carrito</a>
                    </div> 
                </div>
            </div>`;
        });
        document.querySelectorAll('.btn-outline-primary').forEach(button => {
            button.addEventListener('click', agregarCarrito);
        });
    });

function agregarCarrito(event) {
    event.preventDefault();
    const idProducto = event.target.dataset.id;
    fetch(`${URL}/${idProducto}`)
        .then(response => response.json())
        .then(producto => {
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert("se añadió al carrito");
            mostrarProductos();
        });
}

function mostrarProductos() {
    productosCarrito.innerHTML = "";

    if (carrito.length === 0) {
        productosCarrito.innerHTML = `
        <div class="text-center">El carrito está vacío</div>
        `;
        subtotal.innerHTML = "";
    } else {
        let total = 0; // Inicializamos la variable total para almacenar el subtotal

        carrito.forEach((producto, indice) => {
            productosCarrito.innerHTML += `
                <div class="col-12 col-md-12 py-3">
                    <div class="card h-100">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${producto.image}" class="img-fluid rounded-start p-3" alt="${producto.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${producto.title.slice(0,30)}</h5>
                                    <p class="card-text">${producto.description.slice(0,80)}</p>
                                    <p class="card-text text-danger">$ ${producto.price}</p>
                                    <div class="mt-auto">
                                        <button class="btn btn-outline-danger w-100" onClick="borrarProducto(${indice})">
                                            <i class="bi bi-trash3-fill"></i> Eliminar del carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            total += producto.price;
        });

        subtotal.innerHTML = `
            <div class="col-12 col-md-12 py-3">Total: $ ${total.toFixed(2)}</div>
        `;
    }
}

window.borrarProducto = function(indice) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        carrito.splice(indice, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarProductos();
    } else {
        alert("Operación cancelada");
    }
};
