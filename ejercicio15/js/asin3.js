//Ejercicio 03
let num = prompt("Ingrese el número")

let resultado = 1

for(let i=1; i<=num; i++){
    resultado = resultado*i
}

document.write(`El factorial de ${num} es: ${resultado}`)