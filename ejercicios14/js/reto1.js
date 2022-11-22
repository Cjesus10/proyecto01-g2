let variable1 = prompt("Ingresar variable 1");
variable1 = parseInt(variable1);
let variable2 = prompt("Ingresar variable 2");
variable2 = parseInt(variable2);
let variable3 = prompt("Ingresar variable 3");
variable3 = parseInt(variable3);
let variable4 = prompt("Ingresar variable 4");
variable4 = parseInt(variable4);

let sum1 = (variable1+variable2)
let dif1 = (variable4-variable3)

let prod = (sum1*dif1)

document.write(`Suma de variables 1 y 2: ${sum1} </br> Diferencia de variables 3 y 4: ${dif1} </br> Producto:  ${prod} `)