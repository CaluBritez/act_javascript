let precioProducto = Number();
let nombreProducto = prompt("Dame el nombre del producto: ").toUpperCase();
if (nombreProducto != "TOTAL") {
  precioProducto = parseInt(prompt("¿Cual es su precio?: "));
}
let acu = 0;
while (nombreProducto != "TOTAL") {
  acu = acu + precioProducto;
  nombreProducto = prompt("Dame el nombre del producto: ").toUpperCase();
  if (nombreProducto != "TOTAL") {
    precioProducto = parseInt(prompt("¿Cual es su precio?: "));
  }
}
console.log("El total de la compra es de " + acu);
