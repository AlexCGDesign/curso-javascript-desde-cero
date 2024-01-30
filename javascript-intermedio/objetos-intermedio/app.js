/*
const loki = {
    nombre: "Loki", 
    raza: "Mestiza",
    contento: true,
}

const max = {};

for(let key in loki){
    max[key] = loki[key];
}

max.nombre = "Max";

console.log("Loki",loki);
console.log("Max",max);

*/


// spread
const loki = {
    name: "Loki",
    raza: "Mestizo",
    contento: true, 
    hermano: {
        name: "Max"
    }
}

const rocky = structuredClone(loki);

rocky.hermano.raza = "Mestizo";
rocky.name = "Rocky";

console.log(loki);
console.log(rocky);

