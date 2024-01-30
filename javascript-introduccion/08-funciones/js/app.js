/*

function tablaMultiplicar(tablaMultiplicar=5){

    const numeros = [1,2,3,4,5,6,7,8,9,10];
    console.log(numeros);

    numeros.forEach( function(numeroActual){

        console.log(` ${tablaMultiplicar} * ${numeroActual} = ${tablaMultiplicar*numeroActual} `);

    } );
   
}

let sumaTodo = function(...numeros){

    let sumaTotal = 0;

    numeros.forEach(function(numero){
        sumaTotal+=numero;
    })

    return sumaTotal;

};

*/


/*

const saludar = (nombre="Alex")=>{
    return `Hola ${nombre}, mucho gusto!`
}

*/
const sumaDosNumeros = (numero1, numero2) =>numero1+numero2;

console.log( sumaDosNumeros(10,20) );
