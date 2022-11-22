// Ejercicio 01
let nombre = prompt("Ingrese el nombre");
let sueldo = prompt("Ingrese el sueldo");
sueldo=parseInt(sueldo);
let hijos = prompt("Ingrese el número de hijos");
hijos=parseInt(hijos);

let boni = sueldo*7/100;
let sueldofinal = 0;
if(hijos>0){
    sueldofinal = sueldo + boni;
}

else {
    sueldofinal = sueldo;
    boni = 0
}

document.write(`Nombre: ${nombre} </br> Bonificación: ${boni} </br> Sueldo Total: ${sueldofinal}`)