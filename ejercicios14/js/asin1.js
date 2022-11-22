let varones = prompt("Ingrese la cantidad de varones");
varones = parseInt(varones)
let mujeres = prompt("Ingrese la cantidad de mujeres");
mujeres = parseInt(mujeres)
let porc1 = varones/(varones+mujeres)*100;
let porc2 = mujeres/(varones+mujeres)*100;

document.write(`Porcentaje de varones: ${porc1} </br> Porcentaje de mujeres: ${porc2}`)