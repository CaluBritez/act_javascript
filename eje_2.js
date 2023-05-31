function esPrimo(numero) {
  if (numero == 2) {
    return true;
  } else if (numero < 2) {
    return false;
  } else {
    for (i = 2; i < numero; i++) {
      if (numero % i == 0) {
        return false;
      }
    }
    return true;
  }
}
let num = parseInt(prompt("Ingrese un numero"));
let respuesta = esPrimo(num);
if (respuesta == true) {
  console.log("El numero " + num + " es Primo");
} else {
  console.log("El numero " + num + " no es Primo");
}
