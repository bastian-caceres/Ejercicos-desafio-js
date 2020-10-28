var dias = parseFloat(prompt("Ingrese la cantidad de dias: "));

var ano = dias / 365 ; //saco el año
var diassobrantes = dias % 365; // dias sobrantes del año(8)
var semana = diassobrantes / 7 // da la semana
var sobrantesemana = diassobrantes % 7 // da los dias


alert(`Los ${dias} ingresados corresponden a ${Math.floor(ano)} año(s), ${Math.floor(semana)} semana(s) y ${Math.floor(sobrantesemana)} dia(s)`);
 