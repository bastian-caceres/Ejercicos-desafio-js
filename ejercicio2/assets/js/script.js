var num1 = parseFloat(prompt("ingrese un numero mayor a cero: ")); // parseFloat numero decimal-parseInt numero entero
var num2 = parseFloat(prompt("ingrese otro numero mayor a cero: "));

var sum = num1 + num2;
var res = num1 - num2;
var div = num1 / num1;
var multi = num1 * num2;
var modulo = num1 % num2;

alert(`La suma de ${num1} y ${num2} es ${sum}`);
alert(`La resta de ${num1} y ${num2} es ${res}`);
alert(`La division de ${num1} y ${num2} es ${div}`);
alert(`La multiplicacion de ${num1} y ${num2} es ${multi}`);
alert(`La modulo de ${num1} y ${num2} es ${modulo}`);
