/*
let numerosVender = 100;
let totalGanancias = 0;


for(let i = 1; i <= numerosVender; i++){
    totalGanancias += i;
}

console.log(`La ganancia total por vender ${numerosVender} numeros fue de ${totalGanancias}`);

---------- tablas multiplicar ------------

for(let i = 1; i <= 10; i++){

    console.log(`Crearemos la tabla de multiplicar del número ${i}`);

    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }

}

*/

for (let i = 1; i <= 20; i++) {
    
    if(i%2===0){
        continue;
    }

    console.log("Vamos a imprimir un número");
    console.log(i);

}

