/*

const heroesMarvel = ["Spiderman", "IronMan", "Thor"];
const heroesDC = ["Batman", "Superman", "MujerMaravilla"];
const heroesExtra = ["Homelander", "Omniman", "Invencible"];

const todosLosHeroes = heroesMarvel.concat(heroesDC, heroesExtra, "Vision", "Black Widow");

console.log(todosLosHeroes);
*/

/*

const redesSociales = ["facebook", "instagram", "pinterest", "tiktok"];
const userName = "AlexCG";


const arregloNuevo = redesSociales.map(function(valorActual, indice, array){
    const url = `https://${valorActual}.com/${userName}`;
    console.log(this);

    return url;
}, {nombre: "Valor Agregado This"});

console.log(arregloNuevo);
*/


/*
const superHeroes = [
    {
        nombre: "Spiderman", 
        propiedad: "Marvel" 
    },
    {
        nombre: "Batman",
        propiedad: "DC",
    },
    {
        nombre: "IronMan",
        propiedad: "Marvel"
    },
    {
        nombre: "Superman",
        propiedad: "DC",
    },
];

let marvelHeroes = superHeroes.filter((heroeActual)=> heroeActual.propiedad === "Marvel");

let ironMan = superHeroes.find(function(heroeActual){
    return heroeActual.nombre === "IronMan"
});

console.log(ironMan);
*/

/*

const tareas = [
    {
        tarea: "Programar", 
        terminado: true 
    },
    {
        tarea: "Estudiar 1 hora", 
        terminado: false 
    },
    {
        tarea: "Sacar a pasear a Loki", 
        terminado: true 
    },
    {
        tarea: "Ir al Gimnasio", 
        terminado: true 
    },
];

let indiceTarea = tareas.findIndex((tarea)=>{

    return !tarea.terminado;
});

let frutas = ["manzana", "fresa", "kiwi", "manzana"];

console.log( frutas.indexOf("manzana", 1) );

*/

