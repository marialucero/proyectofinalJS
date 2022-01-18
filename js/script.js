// Simulador para calcular el precio final de un pedido junto con los datos del cliente: 
const suma = (num1, num2)=> num1+num2;
const resta = (num1, num2) => num1-num2;
const multiplicar = (num1,num2) => num1*num2;
const iva24 = z => z*1.24;
const descuento = y => y*0.9; 
const iva21 = x => x*1.21; 
const mas45 = k => k*1.45;

let arrayPedidos = [];
let arrayProductos = [
    {id:1,producto: "Artesano Semillas 400g",precio: 138.90}, 
    {id:2, producto: "Artesano Original 500g",precio: 137.10},
    {id:3, producto: "Hamburguesas Brioche Artesano 240g",precio:96.10},
    {id:4, producto: "Pan para Hamburguesa Artesano 240g",precio:82.10},
    {id:5, producto: "Pan para Pancho Artesano 240g",precio:82.10},
    {id:6, producto: "Pan Oroweat Cereales 600g",precio:195.40},
];

let nombre = prompt("Ingrese su nombre"); 
let direccion = prompt("Ingrese la dirección de su local"); 
let telefono = parseInt(prompt("Ingrese un número de celular para contactarnos"));
let email = prompt("Ingrese su e-mail"); 

let ingreseProductoAComprar = parseInt(prompt("Los productos disponibles para su compra son: \n 1- Artesano Semillas 400g \n 2 - Artesano Original 500g \n 3- Hamburguesa Brioche Artesano 240g. \n 4- Pan para Hamburguesa Artesano 240g \n 5-Pan para Pancho Artesano 240g \n 6- Pan Oroweat Cereales 600g \n Ingrese el número del producto deseado: "));
let producto = arrayProductos.find(x => x.id == ingreseProductoAComprar);
let cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades a comprar")); 

let precioBruto = producto.precio;  
let precioNeto = mas45(iva24(precioBruto));
let totalNeto = multiplicar(precioNeto,cantidadUnidades);
let precioFinal = iva21(descuento(totalNeto)).toFixed(2);

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

const pedido1 = new Pedido(nombre, direccion, telefono, email, producto,cantidadUnidades, precioNeto, totalNeto, precioFinal);
arrayPedidos.push(pedido1);
console.log(arrayPedidos);