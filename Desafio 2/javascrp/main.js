const banquito = 5700
const candelabro = 13000
const bandejaHex = 8900
const bandejaOcto = 11000
const espejo = 19000
const mesaOcto = 25000
const estante = 16000

let cantDeArticulos = 0
let cantDescuento = 0
let nombreUsuario = pedirNombreYApe()
let totalPagar = ingresoProductos()
let validacion = validarIngreso(totalPagar)
if (validacion === false) {
  alert('No se valido ninguna compra')
} else {
  let pagarDescuento = descuento(totalPagar)
  alert('Se seleccionaron ' + cantDeArticulos + ' articulos y se aplico un ' + cantDescuento + '% de descuento. El total a pagar es: $' + pagarDescuento)
}


function ingresoProductos() {

  let sumaTotal = 0
  let productoIngresado = parseInt(prompt("Ingrese un producto que desea comprar. Ingrese 0 para terminar con la seleccion"))
  while (productoIngresado !== 0) {
    cantDeArticulos += 1
    while ((productoIngresado < 0) || (productoIngresado > 7) || (productoIngresado === "")) {
      productoIngresado = parseInt(prompt("Seleccion erronea. Por favor vuelva a intentar"))
    }
    switch (parseInt(productoIngresado)) {
      case 1:
        sumaTotal += banquito
        break;
      case 2:
        sumaTotal += candelabro
        break;
      case 3:
        sumaTotal += bandejaHex
        break;
      case 4:
        sumaTotal += bandejaOcto
        break;
      case 5:
        sumaTotal += espejo
        break;
      case 6:
        sumaTotal += mesaOcto
        break;
      case 7:
        sumaTotal += estante
        break;
      default:
        break;
    }
    productoIngresado = parseInt(prompt("Ingrese un producto que desea comprar. Ingrese 0 para terminar con la seleccion"))

  }

  return sumaTotal
}

function descuento(pago) {
  let medioDePago = prompt("Ingrese el medio de pago a abonar. 'T' si es con tarjeta, 'MP' si es con Mercado Pago o 'E' si es con efectivo").toUpperCase()
  while (medioDePago !== 'T' && medioDePago !== "MP" && medioDePago !== "E") {
    medioDePago = prompt("Medio de pago incorrecto. 'T' si es con tarjeta, 'MP' si es con Mercado Pago o 'E' si es con efectivo").toUpperCase()
  }
  switch (medioDePago) {
    case ("T"):
      alert("el medio de pago que ingreso no tiene descuento")
      cantDescuento = 0
      break;
    case ("MP"):
      pago = pago * 0.85
      alert("Se le aplico un 15% de descuento")
      cantDescuento = 15
      break;
    case ("E"):
      pago = pago * 0.80
      alert("Se el aplico un 20% de descuento")
      cantDescuento = 20
      break;
    default:
      break;
  }
  console.log("Se genero un descuento del " + cantDescuento + '%' + ' = ' + "$" + pago)
  return pago
}

function pedirNombreYApe() {
  let nombreIngresado = prompt("Ingrese su Nombre").toUpperCase()
  while (nombreIngresado === "") {
    nombreIngresado = prompt("Error, Ingrese su Nombre").toUpperCase()
  }
  let apellidoIngresado = prompt("Ingrese su Apellido").toUpperCase()
  while (apellidoIngresado === "") {
    apellidoIngresado = prompt("Error, Ingrese su Nombre").toUpperCase()
  }
  let nombreCompleto = nombreIngresado + ' ' + apellidoIngresado
  return nombreCompleto
}

function validarIngreso(total) {
  if (total === 0) {
    return false
  } else {
    return true
  }
}