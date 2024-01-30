// Reduce

/*
const equiposChampions = [
    {
        nombre: "Barcelona",
        champions: 5
    },
    {
        nombre: "Bayern",
        champions: 6
    },
    {
        nombre: "Real Madrid",
        champions: 14
    },
    {
        nombre: "Milan",
        champions: 7
    },
];



let championsGanadas = equiposChampions.reduce( (championsGanadas, equipoActual)=>{

    return championsGanadas + equipoActual.champions;
}, 0);

console.log(`Las champions ganadas son: ${championsGanadas}`);

const superHeroes = ["Spider-man", "IronMan", "Hulk", "Wolverine", "Venom"];

const personajesMarvel =
superHeroes
.filter((heroe) => heroe.length >= 7)
.map((heroe) => ({
        name: heroe,
        franquicia:"Marvel"
    }))

console.log(personajesMarvel);

*/

const frutas = ["Manzana", "Pera", "Uva", "Kiwi"];

let stringsFrutas = frutas.join("-");

console.log(stringsFrutas);