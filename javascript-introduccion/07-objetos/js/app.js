
let edad = "edadMeses";

const loki = {
    nombre: "Loki",
    edadMeses: 27,
    hermanos: true
};
// for in

for(let propiedadesLoki in loki){
    console.log(propiedadesLoki);
    console.log( loki[propiedadesLoki] );
}
