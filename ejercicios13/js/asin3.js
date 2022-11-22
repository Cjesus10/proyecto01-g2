let nota1= prompt("Ingresa nota 1");
nota1 = parseInt(nota1);
let nota2= prompt("Ingresnota 2");
sueldo2 = parseInt(nota2);
let nota3= prompt("Ingresa nota 3");
sueldo3 = parseInt(nota3);

let porc1 = (nota1*30/100);
let porc2 = (nota2*30/100);
let porc3 = (nota3*40/100);



document.write(`promedio final : ${(porc1+porc2+porc3)}`)