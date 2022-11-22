let montototal = prompt("Ingrese el monto total");
montototal = parseInt(montototal);

let AvLaMar = (montototal*35/100);
let AvAbancay = (montototal*25/100);
let Av28deJulio = (montototal*10/100);
let AvAviacion = (montototal*15/100);
let AvTacna = (montototal-(AvLaMar+Av28deJulio+AvAbancay+AvAviacion))


document.write(`Av. La Mar: ${AvLaMar} </br> Av. Abancay: ${AvAbancay} </br> Av. 28 de Julio: ${Av28deJulio}  </br> Av: Aviacion ${AvAviacion}  </br> Av: Tacna ${AvTacna}`)