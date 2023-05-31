console.log("¿En que unidad ingresara la temperatura?");
let unidad = prompt(
  "(C=celsius; F=fahrenheit) -Ingrese letra según corresponda: "
).toUpperCase();
let temperatura = parseInt(prompt("Ingrese temperatura"));

if (unidad == "C") {
  console.log("Usted ingreso " + temperatura + " grados Celsius");
  let fare = temperatura * (9 / 5) + 32;
  console.log("en grados Fahrenheit es " + fare.toFixed(2));
} else if (unidad == "F") {
  console.log("Usted ingreso " + temperatura + " grados Fahrenheit");
  let cel = (temperatura - 32) * (5 / 9);
  console.log("en grados Celsius es " + cel.toFixed(2));
} else {
  console.log("Usted ingreso mal lo solicitado");
}
