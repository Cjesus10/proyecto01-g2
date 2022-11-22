// Ejercicio 01
let importe = prompt("Ingrese el importe");
importe=parseInt(importe);
let descuento = 0;
let importefinal = 0;

if(importe>150){
    descuento = importe*12/100;
    importefinal = importe - descuento;
}
else{
    importefinal = importe;
    descuento = 0;
}
document.write(`Descuento: ${descuento} </br> Importe Final: ${importefinal}`)
