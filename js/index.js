//Comentario simple
/*Comentario de
varias lineas */

/* Alert:
alert("mensaje" o variable);

el simbolo + sirve para sumar aritmeticamente o concatenar datos, pero no puedes hacer operaciones matematicas entre diferentes tipos de variables porque arroja error

Prompt:
let nombreIngresado = prompt("ingrese su nombre");

nos sirve para que el usuario defina una variable
pero solo guarda valores tipo string. para guardalos como int

let nombreIngresado = parseInt(prompt("ingrese su nombre")); de esta manera ya lo guarda como Int, y el pase lo usamos para convertir a cualquier otro dato
parseInt -> valores enteros
parseFloat -> valores con coma flotante
*/

//Declaracion de variables
let nombre = "Felipe"; //variable tipo string
let apellido = "Martinez";
let edad = 21; //variable tipo int o number
let altura = 1.85; //variable tipo float (numeros con coma)
let concatenar = nombre + " " + apellido;
let sumar = edad + altura;

const variable = 20; // las const son variables que no se puede modificar su valor despues en el codigo

//nombre = Tomas; //Cambio del valor de una variable

//alert(concatenar);
//alert(sumar);

let nombreIngresado = prompt("Ingrese su nombre");
alert("Tu nombre es " + nombreIngresado);