// Simulador para calcular el precio final de un pedido junto con los datos del cliente: 
const suma = (num1, num2)=> num1+num2;
const resta = (num1, num2) => num1-num2;
const multiplicar = (num1,num2) => num1*num2;
const iva24 = z => z*1.24;
const descuento = y => y*0.9; 
const iva21 = x => x*1.21; 
const mas45 = k => k*1.45;

const urlProductosJSON = "../datos/productos.json";
const urlCategoriasJSON = "../datos/categorias.json";
const urlLineasJSON = "../datos/lineas.json";

const arrayPedidos = [];

// API
function getProductos(){
    return getListas(urlProductosJSON);
}
function getCategorias(){
    return getListas(urlCategoriasJSON);
}
function getLineas(){
   return getListas(urlLineasJSON);
}

function getListas(url){
    return $.getJSON(url);
}

document.addEventListener("DOMContentLoaded", async function() {
    var htmlProductos = document.getElementById("divProductos");
    htmlProductos.classList = "mb-5";
    getCategorias().done(function (arrayCategorias) {
        arrayCategorias.forEach(oCategoria => {
            let categoria = document.createElement("h4");
            categoria.innerHTML = oCategoria.descripcion;
            categoria.id = "categoria-" + oCategoria.id;
            htmlProductos.appendChild(categoria);
            getLineas().done(function (arrayLineas) {
                arrayLineas.filter(oLinea => oLinea.id_categoria == oCategoria.id).forEach(oLinea => {
                    let item = $("#categoria-" + oLinea.id_categoria);
                    let linea = document.createElement("h5");
                    linea.innerHTML = oLinea.descripcion;
                    item.append(linea);
                    let contenedorProductos = document.createElement("div");
                    contenedorProductos.classList = "container";
                    linea.append(contenedorProductos);
                    let divRow = document.createElement("div");
                    divRow.classList = "row justify-content-center"
                    contenedorProductos.appendChild(divRow);
                    getProductos().done(function (arrayProductos) {
                        arrayProductos.filter(oProducto => oProducto.id_linea == oLinea.id).forEach(oProducto => {
                            let cardCol = document.createElement("div");
                            cardCol.classList = "col mb-3 p-0";
                            cardCol.innerHTML = `<div class="card">
                            <img src="${oProducto.imagen}" class="card-img-top" alt="producto">
                            <div class="card-body">
                              <h6 class="card-title">${oProducto.nombre}</h6>
                              <h6>$ ${oProducto.precio}</h6>
                              <p class="card-text ">${oProducto.descripcion}</p>
                              <button type="button" data-producto="${oProducto.id}" class="btn btn-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="setValuesModal(this);">
                                <a href="#" class="text-light" id="añadirPedido">Añadir al pedido</a>
                              </button>
                            </div>`
                            divRow.appendChild(cardCol);
                        });
                    });
                });
            });
        });
    });  
});

function setValuesModal(obj){
    let productoElegido = obj.dataset.producto;
    $('#hid-producto').val(productoElegido);
    $('#cantidadUnidades').val("");
}


// Storage y carrito
$('#añadirAlCarrito').click(function (){
    let carrito = getCarrito();
    let itemCarrito = {};
    let idProducto = $('#hid-producto').val();
    let cantidadPedida = $('#cantidadUnidades').val();
    debugger;
    itemCarrito.producto = idProducto;
    itemCarrito.cantidad = cantidadPedida;
    if (carrito.find(x => x.producto == idProducto)) {
        showModalMensajes("Error", 'El producto ya existe en el carrito');
    }
    else {
        carrito.push(itemCarrito);
        localStorage.setItem("cartItems", JSON.stringify(carrito));
        $("#staticBackdrop").modal('hide');
        showModalMensajes("Éxito", 'El producto ha sido agregado al carrito exitosamente');
    }
});

function showModalMensajes(titulo, mensaje) {    
    $("#tituloModal").text(titulo);
    $("#mensajeModal").text(mensaje);
    $("#modalMensajes").modal('toggle');
}

function getCarrito() {
    let carrito = localStorage.getItem("cartItems");
    if (carrito == null || carrito == undefined)
        carrito = [];
    else
        carrito = JSON.parse(carrito);
    return carrito;
}

function loadCarrito() {
    $("#carritoBody").empty();
    let carrito = getCarrito();
    let contador = 0;
    if (carrito.length > 0) {
        let valorCarrito = 0;
        carrito.forEach(itemCarrito => {
            getProductos().done(function (productos) {
                let producto = productos.find(x => x.id == itemCarrito.producto);
                contador++;
                let divItemCarrito = document.createElement("div");
                divItemCarrito.innerHTML = `<div class="row" id="producto-${producto.id}}">
                            <div class="col-4">
                                <img src="${producto.imagen}" height="100" width="100" alt="producto-${producto.id}">
                                <p>${producto.nombre}</p>
                            </div>
                            <div class="row col-8">
                                <div class="col-3" style="text-align: center;margin-top: 80px;">$${producto.precio}</div>
                                <div class="col-3" style="text-align: center;margin-top: 80px;">${itemCarrito.cantidad}</div>
                                <div class="col-6" style="text-align: center;margin-top: 75px;">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-secondary" data-producto="${producto.id}" onclick="deleteProducto(this);">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary" data-producto="${producto.id}" onclick="editProducto(this);">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>`;
                $("#carritoBody").append(divItemCarrito);
                valorCarrito += producto.precio * itemCarrito.cantidad;
                if (contador == carrito.length){
                    $("#carritoPrecio").show();
                    let pCarritoPrecio = document.createElement("p");
                    pCarritoPrecio.innerHTML = "<strong>TOTAL: $ " + valorCarrito + "</strong>";
                    $("#carritoPrecio").append(pCarritoPrecio);
                    $("#pedidoButton").removeAttr("disabled");
                    $("#linkPedidoButton").attr("href", "../pages/carrito.html");
                }
            });
        });
    }
    else {
        let pCarritoVacio = document.createElement("p");
        pCarritoVacio.innerHTML = "El carrito está vacío, añadí productos para realizar tu pedido";
        $("#carritoBody").append(pCarritoVacio);
        $("#carritoPrecio").hide();
        $("#pedidoButton").attr("disabled", "disabled");
        $("#linkPedidoButton").attr("href", "#");
    }
}








