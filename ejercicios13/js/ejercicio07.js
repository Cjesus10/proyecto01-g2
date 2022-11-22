// Ejercicio 07
let num5 = prompt("Introduce el número de 3 cifras")
let c1 = Math.floor(num5/100);
let c2 = Math.floor((num5-c1*100)/10);
let c3 = Math.floor(num5-c1*100-c2*10);
let sumcifras = c1+c2+c3;
document.write(`La suma de sus cifras es: ${sumcifras}`)
