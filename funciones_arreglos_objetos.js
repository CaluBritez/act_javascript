//EJERCICIOS DE FUNCIONES
function esMayorEdad(valor) {
  let esMayo = Boolean();
  if (valor < 18) {
    esMayo = false;
  } else {
    esMayo = true;
  }
  return esMayo;
}
//-------------
function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}
//-------------
function esPalindromo(cad) {
  let nuevaCadena = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    nuevaCadena += cad[i];
  }
  if (cad == nuevaCadena) {
    return true;
  } else {
    return false;
  }
}
//-------------
function generarNumeroAleatorio() {
  variable = parseInt(Math.random() * 10);
  return variable;
}
//EJERCICIOS DE ARREGLOS
function obtenerSuma(arreglo) {
  let sumaAcu = 0;
  for (i = 0; i < arreglo.length; i++) {
    sumaAcu = sumaAcu + arreglo[i];
  }
  return sumaAcu;
}
//-------------
function obtenerPares(vector) {
  let resultado = [];
  for (i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
      resultado.push(vector[i]);
    }
  }
  return resultado;
}
//-------------
function obtenerPromedioPonderado(notas, pesos) {
  let acuNotPe = 0;
  for (i = 0; i < notas.length; i++) {
    acuNotPe = acuNotPe + notas[i] * pesos[i];
  }
  return acuNotPe;
}
//-------------
function obtenerMaximo(arreglo) {
  let max = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > max) {
      max = arreglo[i];
    }
  }
  return max;
}
//EJERCICIOS DE OBJETOS
let producto = {
  nombre: "Pepitos",
  precio: 400,
  cantidad: 6,
};
function calcularTotal(objeto) {
  let monto = objeto.precio * objeto.cantidad;
  return monto;
}
//-------------
let persona = {
  nombre: "Silvana",
  edad: 20,
  profesion: "Desarrolladora web",
};
function presentarPersona(persona) {
  console.log(
    "Ella se llama " +
      persona.nombre +
      " tiene " +
      persona.edad +
      " años de edad y su profesión es " +
      persona.profesion
  );
}
//-------------
function esMayorDeEdad(obj) {
  let valor = Boolean();
  if (18 <= obj.edad) {
    valor = true;
  } else {
    valor = false;
  }
  return valor;
}
//-------------
