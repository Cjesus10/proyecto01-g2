let egeneral = prompt("Cantidad de entradas general");
let emayores = prompt("Cantidad de etradas mayores de 65");
let emenores = prompt("Cantidad de entradas menores de edad");
let rgeneral = 150*egeneral;
let rmayores = 50*emayores;
let rmenores = 80*emenores;
document.write(`Recaudación General: ${rgeneral} </br> Recaudacion mayores de 65: ${rmayores} </br> Recaudación menores de edad: ${rmenores}`)