const ArrayProductos = []

class productos {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}


const cargarProductos = () => {
    const mandalac = new productos("mandala chica", 1000, "20cm")
    ArrayProductos.push(mandalac);

    const mandalam = new productos("mandala mediana", 2000, "35 cm")
    ArrayProductos.push(mandalam);

    const mandalag = new productos("mandala grande", 4000, "50 cm")
    ArrayProductos.push(mandalag);

    const canastac = new productos("canasta chica", 1000, "10 cm")
    ArrayProductos.push(canastac);

    const canastam = new productos("canasta mediana", 1500, "15 cm")
    ArrayProductos.push(canastam);

    const canastag = new productos("canasta grande", 2000, "20 cm")
    ArrayProductos.push(canastag);
}



const verProfuctos = () => {

    let buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
    
    while (buscar != "fin") {
        let exsiste = ArrayProductos.includes(buscar)
        if (exsiste == "true") {
            alert(ArrayProductos(buscar))
            let buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
        } else {
            alert("el producto ingresado no exsiste")
            let buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
        }
    }
}

let precioTotal = 0

let desc = 0

const impuestoIva = (precioTotal) => { return 21 * precioTotal / 100 };

const descuento = (precioTotal, desc) => { return desc * precioTotal / 100 };

const precioFinal = (precioTotal, impuestoIva, descuento) => { return precioTotal + impuestoIva - descuento };


const calcularPrecio = () => {

    let cargar = prompt("desea calcular el valor final se un producto(si/no): ")

    while (cargar == "si") {
        let producto = prompt("ingrese el producto (mandalac, mandalam, mandalag, canastab, canastam, canastag): ")
        let cantidad = parseInt(prompt("ingrese la cantidad: "))

        const productoBuscar = ArrayProductos.find(producto)
        const precioProducto = productoBuscar.precio

        let precioTotal = precioProducto * cantidad

        desc = parseInt(prompt("ingrese le porcentaje del descuento a realizar: "))
        console.log(averiguar());
        cargar = prompt("desea calcular el valor final de un producto(si/no): ")
    }
}


const averiguar = () => {

    let pregBuscar = prompt("ingrese eque valor desea conocer(impuesto-IVA, descuento, precio final). En caso de querer terminar ingrese 'no': ")

    while (pregBuscar != "no") {

        if (pregBuscar == "impuesto-IVA") {
            console.log("el monto del impuesto del iVA es de: " + impuestoIva(precioTotal))
        } else if (pregBuscar == "descuento") {
            console.log("el monto descontado es de: " + descuento(precioTotal, desc))
        } else if (pregBuscar == "precio final") {
            console.log("el precio final en fincion del iva y del descuento es de: " + precioFinal(precioTotal, impuestoIva(precioTotal), descuento(precioTotal, desc)))
        } else {
            console.log("ingreso una opcion invalida")
        }
        pregBuscar = prompt("ingrese eque valor desea conocer(impuesto-IVA, descuento, precio final). En caso de querer terminar ingrese 'no': ")

    }

}

const pagoCuotas = () => {

    let rta = prompt("desea calcular un pago (si/no): ")

    while (rta == "si") {
        let precio = parseInt(prompt("ingrese el precio del producto: "))
        let cantidad = parseInt(prompt("ingrese la cantidad: "))

        precioTotal = precio * cantidad

        let cuotas = parseInt(prompt("ingrese en cuantas cuotas lo va a pagar(1/2/3): "))
        if (cuotas == 1) {
            alert("el precio final a pagar es de: " + precio)
        }
        else {
            let precioCuota = precio / cuotas
            alert("el monto total a pagar por cuota es de: " + precioCuota)
        }
        rta = prompt("desea calcular otro pago (si/no): ")
    }
}

//menu

cargarProductos();

let opcion = parseInt(prompt("ingrese la opcion que desee cargar: \n 1-ver productos, \n 2-calcular precio en efectivo, \n 3-calcular precio en cuptas 4-salir"))

while (opcion < 5) {

    switch (opcion) {
        case 1:
            verProfuctos();
            break;
        case 2:
            calcularPrecio();
            break;
        case 3:
            pagoCuotas();
            break;
        case 4:
            break;
    }
    let opcion = parseInt(prompt("ingrese la opcion que desee cargar: \n 1-ver productos, \n 2-calcular precio en efectivo, \n 3-calcular precio en cuptas 4-salir"))

}