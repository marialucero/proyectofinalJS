// en desarrollo


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
const datosPedido = [{nombre, telefono, email, direccion, codigoPostal, medioDePago, cantidadUnidades}];




let nombre = document.getElementById('inputName').innerHTML;
let telefono = document.getElementById('inputPhone');
let email = document.getElementById('inputEmail').innerHTML;
let direccion = document.getElementById('inputAddress').innerHTML;
let codigoPostal = document.getElementById('inputZip');
let medioDePago = document.getElementById('inputMedioDePago').innerHTML;
let cantidadUnidades = document.getElementById('cantidadUnidades'); 















