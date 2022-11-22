// Ejercicio 09
let pbase = prompt("Ingrese el precio base");
pbase = parseInt(pbase)
let igv = pbase*19/100;
let pfinal = pbase + igv;
document.write(`IGV: ${igv} </br> Precio final: ${pfinal}`)
