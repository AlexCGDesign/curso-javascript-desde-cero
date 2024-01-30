// While
/*
let array = [];
let numero = 1;

while(true){

    array.push(numero);

    if(numero >= 10){
        break;
    }


    numero++;
}

console.log(array);

let i = 1;

while(i <= 10){
    let j = 1;

    while(j <= 10){
        console.log(`${i}x${j} = ${i*j}`);

        j++;
    }

    i++;
}
*/


// Do While

/*
let numeroAdivinar = 10;
let numeroDado = 0;

do{

    numeroDado = Number(prompt("¿Cuál crees que sea el número"));

}while(numeroDado !== numeroAdivinar)

alert("En hora buena, acertaste!")
*/

// For Of

/*
let frutas =  ["melon", "sandía", "uva", "fresa"]; 

for( let fruta of frutas ){
    console.log(fruta);
}
*/

// For in

const perro = {
    name: 'Loki', 
    edadMeses: 24,
    guapo: true, 
};

for(let propiedades in perro){
    console.log(propiedades);
    console.log( perro[propiedades] );
}