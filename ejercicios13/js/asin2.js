let sueldo1= prompt("Ingresa sueldo 1");
sueldo1 = parseInt(sueldo1);
let sueldo2= prompt("Ingresa sueldo 2");
sueldo2 = parseInt(sueldo2);
let sueldo3= prompt("Ingresa sueldo 3");
sueldo3 = parseInt(sueldo3);

let bono1 = (sueldo1*10/100);
let bono2 = (sueldo2*12/100);
let bono3 = (sueldo3*15/100);


let sueldototal1 = (sueldo1+bono1);
let sueldototal2 = (sueldo2+bono2);
let sueldototal3 = (sueldo3+bono3);


document.write(`El sueldo total 1: ${sueldototal1} </br> El sueldo total 2: ${sueldototal2}  </br> El sueldo total 3: ${sueldototal3}`)
