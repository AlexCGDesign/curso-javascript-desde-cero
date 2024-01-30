// Arreglos , Arrays


/*

.push() <- Agrega un elemento al final 
.pop() <- Elimina el último elemento
.unshift() <- Agrega un elemento al principio
.shift() <- Elimina al primero elemento

*/

/*
const tablaMultiplicar = [1,2,3,4,5,6,7,8,9,10];
let numeroMultiplicar = Number(prompt("¿Qué tabla de multiplicar quieres?"));

tablaMultiplicar.forEach( function(numero){
    
    let resultado = numero * numeroMultiplicar;

    let mensaje = `Multiplicar ${numeroMultiplicar}x${numero2} es igual a ${resultado}`;

    console.log(mensaje);

} );

*/

const equiposGanadoresChampions = 
[
    ["Barcelona", "Madrid"],
    ["Juventus", "Inter", "Milan"],
    ["City", "United", "Liverpool", "Chelsea"],
];

equiposGanadoresChampions.forEach( function(equiposGanadores){

    equiposGanadores.forEach(function(equipo){
        console.log(equipo);
    })
    
});