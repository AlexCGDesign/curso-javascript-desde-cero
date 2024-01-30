/*let fruta = "kiwi";


switch(fruta){

    case "fresa":
        console.log("Has entrado al caso Fresa");
        console.log("El kilo de fresa está a $20.00");
        break;

    case "platano":
        console.log("Has entrado al caso platano");
        console.log("El kilo de platano está a $10.00");
        break;
        
    case "uva":
        console.log("Has entrado al caso uva");
        console.log("El kilo de uva está a $40.00");
        break;

    default: 
        console.log("Fruta no existente");
        break;
    
}*/


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

// division
switch(operacion){

    case "suma":
        resultado = suma(numero1, numero2);
        break;
    
    case "resta":
        resultado = resta(numero1, numero2);
        break;

    case "multiplicacion":
        resultado = multiplicacion(numero1, numero2);
        break;
    
    default:
        resultado = false;

}

if(resultado){
    console.log(`El resultado de la ${operacion} es igual a ${resultado}`);
}else{
    console.log("Operacion no encontrado");
}