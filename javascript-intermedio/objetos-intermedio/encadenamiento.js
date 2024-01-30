let hermanos = Symbol("hermanos");
let apodos = Symbol("apodos");

let loki = {
    nombre: "Loki", 
    edad: 27,
    [hermanos]: true,
    [apodos]: "Gordo"
}

console.log(loki.hermanos);