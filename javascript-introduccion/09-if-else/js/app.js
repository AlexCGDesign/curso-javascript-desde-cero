/*
const suma = (num1, num2) =>{
    return num1+num2;
};

const resta = (num1, num2) =>{
    return num1-num2;
};

const multiplicacion = (num1, num2) =>{
    return num1*num2;
};

const pedirNumero = ()=>{
    let numero = Number(prompt("Ingresa tu número"));

    return numero;
}

let numero1 = pedirNumero();
let numero2 = pedirNumero();
let operacion = prompt("¿Qué operación quieres realizar?").toLowerCase();
let resultado;

if(operacion === "suma"){
    resultado = suma(numero1, numero2);
}

else if(operacion === "resta"){
    resultado = resta(numero1, numero2);
}

else if(operacion === "multiplicacion"){
    resultado = multiplicacion(numero1, numero2);
}

else{
    resultado = false;
}


if(resultado){
    console.log(`El resultado de la ${operacion} es igual a ${resultado}`);
}else{
    console.log("Operación no encontrada");
}

*/


// trabajo > 5hrs = 10
// trabajo > 10hrs = 15
// trabajo > 15hrs = 20

let horasTrabajadas = 20;

if(horasTrabajadas >= 20){
    console.log("El pago por hora es $20.00");
}

else if(horasTrabajadas >= 10){
    console.log("El pago por hora es $15.00");
}

else if(horasTrabajadas >= 5){
    console.log("El pago por hora es $10.00");
}

let sexo = "hombre";
let edad = 17;

if(sexo === "hombre" || edad >= 18){
    console.log("Acceso permitido");
}else{
    console.log("Acceso denegado");

}