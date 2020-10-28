var celsius = parseFloat(prompt("Ingrese los ºC: "));

var kelvin = celsius + 273.15
var fahrenheit = (celsius * (9 / 5)) + 32

alert(`Los ${celsius}ºC ingresados corresponden a ${kelvin} Kelvin`);
alert(`Los ${celsius}ºC ingresados corresponden a ${fahrenheit} ºF`);
