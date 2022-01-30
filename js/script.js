// Simulador para calcular el precio final de un pedido junto con los datos del cliente: 
const suma = (num1, num2)=> num1+num2;
const resta = (num1, num2) => num1-num2;
const multiplicar = (num1,num2) => num1*num2;
const iva24 = z => z*1.24;
const descuento = y => y*0.9; 
const iva21 = x => x*1.21; 
const mas45 = k => k*1.45;

const arrayPedidos = [];
const arrayProductos = [
    {id:1, nombre: "Artesano Semillas 400g", descripcion: "Pan Blanco con Semillas de la línea Artesano de Bimbo", imagen: "../images/productos_accordion/productos/panificados/artesano400g.png", precio: 138.90, id_categoria: 1, id_linea: 1},
    {id:2, nombre: "Artesano Original 500g", descripcion: "Pan Blanco de la línea Artesano de Bimbo", imagen: "../images/productos_accordion/productos/panificados/artesano500g.png", precio: 137.10, id_categoria: 1, id_linea: 1},
    {id:3, nombre: "Pan para Hamburguesa Artesano 240g", descripcion: "Pan para Hamburguesa de la línea Artesano de Bimbo", imagen: "../images/productos_accordion/productos/panificados/hamburguesaartesano.png", precio:82.10, id_categoria: 1, id_linea: 1},
    {id:4, nombre: "Pan para Pancho Artesano 240g", descripcion: "Pan para Pancho de la línea Artesano de Bimbo", imagen: "../images/productos_accordion/productos/panificados/panchoartesano.png", precio:82.10, id_categoria: 1, id_linea: 1},
    {id:5, nombre: "Hamburguesas Brioche Artesano 240g", descripcion: "Pan para Hamburguesa de la línea Artesano Brioche de Bimbo", imagen: "../images/productos_accordion/productos/panificados/artesanobrioche.png", precio:96.10, id_categoria: 1, id_linea: 1},
    {id:6, nombre: "Fargo Lacteado 550g", descripcion: "Pan Blanco Grande de la línea Lacteado de Fargo", imagen: "../images/productos_accordion/productos/panificados/lacteadogrande.png", precio: 0, id_categoria: 1, id_linea:2},
    {id:7, nombre: "Fargo Lacteado 440g", descripcion: "Pan Blanco Chico de la línea Lacteado de Fargo", imagen: "../images/productos_accordion/productos/panificados/lacteadochico.png", precio: 0, id_categoria: 1, id_linea:2},
    {id:8, nombre: "Mesa Lactal 500g", descripcion: "Pan Blanco Grande de la línea Mesa de Lactal", imagen: "../images/productos_accordion/productos/panificados/mesalactalgrande.png", precio: 0, id_categoria: 1, id_linea:2},
    {id:9, nombre: "Mesa Lactal 300g", descripcion: "Pan Blanco Chico de la línea Mesa de Lactal", imagen: "../images/productos_accordion/productos/panificados/mesachicolactal.png", precio: 0, id_categoria: 1, id_linea:2},
    {id:10, nombre: "Mix Cereal 430g", descripcion: "Pan Blanco Chico con Semillas de la línea Mix Cereal de Fargo", imagen: "../images/productos_accordion/productos/panificados/mixcereal.png", precio: 0, id_categoria: 1, id_linea:2},
    {id: 11, nombre:"Salvado Plus 630g", descripcion: "Pan Salvado de la línea Salvado Plus de Fargo", imagen: "../images/productos_accordion/productos/panificados/salvadodoble.png",precio: 0, id_categoria:1, id_linea:3},
    {id:11, nombre: "Pan Oroweat Cereales 600g", descripcion: "Pan con Cereales de la línea Oroweat", imagen: "../images/productos_accordion/productos/panificados/oroweatcereales.png", precio:195.40, id_categoria: 1, id_linea: 4},
    {id:12, nombre: "Pan Oroweat Semillas 600g", descripcion: "Pan con Semillas de la línea Oroweat", imagen: "../images/productos_accordion/productos/panificados/oroweatsemillas.png", precio:195.40, id_categoria: 1, id_linea: 4}

];
const arrayCategorias = [
    {id: 1, descripcion: "Panificados"},
    {id: 2, descripcion: "Dulces"},
    {id: 3, descripcion: "Fríos"},
    {id: 4, descripcion: "Snacks"}
];
const arrayLineas = [
    {id: 1, descripcion: "Línea artesano", id_categoria: 1},
    {id: 2, descripcion: "Blancos", id_categoria: 1},
    {id: 3, descripcion: "Salvados", id_categoria: 1},
    {id: 4, descripcion: "Integrales", id_categoria: 1},
    {id: 5, descripcion: "Pancho y Hamburguesa", id_categoria:1},
    {id: 6, descripcion: "Madalenas", id_categoria: 2},
    {id: 7, descripcion: "Budines", id_categoria: 2},
    {id: 8, descripcion: "Vainillas", id_categoria: 2},
    {id: 9, descripcion: "Tapas para empanadas", id_categoria: 3},
    {id: 10, descripcion: "Pascualina", id_categoria: 3}
];
document.addEventListener("DOMContentLoaded", function() {
    var htmlProductos = document.getElementById("divProductos");
    htmlProductos.classList = "mb-5";
    arrayCategorias.forEach(oCategoria => {
        let categoria = document.createElement("h4");
        categoria.innerHTML = oCategoria.descripcion;
        htmlProductos.appendChild(categoria);
        arrayLineas.filter(oLinea => oLinea.id_categoria == oCategoria.id).forEach(oLinea => {
            let linea = document.createElement("h5");
            linea.innerHTML = oLinea.descripcion;
            htmlProductos.appendChild(linea);
            let contenedorProductos = document.createElement("div");
            contenedorProductos.classList = "container";
            htmlProductos.appendChild(contenedorProductos);
            let divRow = document.createElement("div");
            divRow.classList = "row justify-content-center"
            contenedorProductos.appendChild(divRow);
            arrayProductos.filter(oProducto => oProducto.id_categoria == oCategoria.id && 
                                                oProducto.id_linea == oLinea.id).forEach(oProducto => {
                let cardCol = document.createElement("div");
                cardCol.classList = "col mb-3 p-0";
                cardCol.innerHTML = `<div class="card">
                <img src="${oProducto.imagen}" class="card-img-top" alt="producto">
                <div class="card-body">
                  <h6 class="card-title">${oProducto.nombre}</h6>
                  <p class="card-text ">${oProducto.descripcion}</p>
                  <button type="button" class="btn btn-card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <a href="#" class="text-light" data-producto="${oProducto.id}" id="añadirAlPedido">Añadir al pedido</a>
                  </button>
                </div>`
                divRow.appendChild(cardCol);
            });
        });
    });
});


class Pedido { 
    constructor(nombre,direccion,telefono,email,producto,cantidadUnidades, precioNeto, totalNeto, precioFinal) {
        this.nombre = nombre; 
        this.direccion = direccion; 
        this.telefono = telefono; 
        this.email = email;
        this.producto = producto
        this.cantidadUnidades = cantidadUnidades;
        this.precioNeto = precioNeto;
        this.totalNeto = totalNeto;
        this.precioFinal = precioFinal; 
    }
    factura() {
        console.log(
        "Datos de facturación y envío: ", "\n", "Nombre: "+ this.nombre+ "\n"+ " Dirección: "+ this.direccion+"\n"+ "Sus datos de contacto son: "+ "\n "+ this.telefono+ "\n "+ this.email + "\n"+
            "Datos del pedido: ", "\n", "Unidades "+ this.cantidadUnidades + "\n"+ "Precio neto por unidad $" + this.precioNeto + "\n "+ "Precio neto total $" + this.totalNeto + "\n"+" Total final con IVA 21% $" + this.precioFinal + "\n"+
            "Su pedido se encuentra realizado, en breve nos comunicaremos con usted"
        );
    }
}





