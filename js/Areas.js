let select = parseInt(
  prompt(
    "Ingrese el area que desea hallar, 1. cuadrado/2. rectangulo/3. Circulo"
  )
);
const pi = 3.1416;

if (select == 1) {
  let lado = parseInt(prompt("Ingrese el lado en cm"));
  let resultado = lado * lado;
  alert("El area del cuadrado es " + resultado + " cm2");
}
else if (select == 2) {
  let ancho = parseInt(prompt("Ingrese el alto en cm"));
  let alto = parseInt(prompt("Ingrese el ancho en cm"));
  let resultado = ancho * alto;
  alert("El area del rectangulo es " + resultado + " cm2");
}
else if (select == 3) {
  let radio = parseInt(prompt("Ingrese el radio en cm"));
  let resultado = pi * (radio * radio);
  alert("El area del circulo es " + resultado + " cm2");
}
