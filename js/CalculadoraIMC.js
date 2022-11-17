// IMC = peso/ altura 2

let peso = parseFloat(prompt("Ingrese su peso en Kg"));
let altura = parseFloat(prompt("ingrese su altura en m"));
let IMC = peso / (altura * altura);

alert("Tu IMC es " + IMC.toFixed(3));