//Ejercicio 02
let nombre = prompt("Ingrese el nombre")
let parcial = prompt("Ingrese la nota pacial")
parcial = parseInt(parcial);
let final = prompt("Ingrese la nota final")
final = parseInt(final);
let practicas = prompt("Ingrese el promedio de prácticas")
practicas = parseInt(practicas);

let promedioexamen = (parcial+2*final)/3
let promediofinal = (promedioexamen + practicas)/2

if(promediofinal>=11){
    document.write(`Alumno: ${nombre} </br> Promedio final ${promediofinal}`)
}
else{
    document.write(`Alumno: ${nombre} </br> No aprobó`)
}
