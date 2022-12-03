// IMC = peso / altura 2

let peso = parseFloat(prompt("Ingrese su peso en Kg"));
let altura = parseFloat(prompt("ingrese su altura en m"));
let IMC = peso / (altura * altura);

alert("Tu IMC es " + IMC.toFixed(1));

/*
IMC	                Nivel de peso
Por debajo de 18.5	Bajo peso
18.5 – 24.9	        Normal
25.0 – 29.9	        Sobrepeso
30.0 o más	        Obesidad
*/

if (IMC < 18.5){
    alert('Estas en bajo peso');
}
else if (IMC >= 18.5 || IMC <= 24.9){
    alert('Estas en peso normal');
}
else if (IMC = 25.0  || IMC <= 29.9){
    alert('Estas en sobre peso');
}
else if (IMC > 30.0){
    alert('Tienes obesidad');
}