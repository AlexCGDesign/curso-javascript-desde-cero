// getElementById

const tituloId = document.getElementById("titulo-principal");
tituloId.contentEditable = true;

// getElementsByClassName

const parrafosClase = document.getElementsByClassName("parrafo");

const parrafosArray = Array.from(parrafosClase);

parrafosArray.forEach(parrafo =>{
    parrafo.style.color = "crimson";
    parrafo.style.fontSize = "1.2rem";
});


// getElementsByTagName

const p = document.getElementsByTagName("p");

// getElementsByName

const inputs = document.getElementsByName("seleccion");
inputs[1].checked = true;



const listaNodos = document.querySelectorAll('p');
const listaHTML = document.getElementsByTagName('p');

console.log(listaNodos);
console.log(listaHTML);

const parrafo = document.createElement("p");
parrafo.textContent = "Elemento Creado con HTML";

document.body.firstElementChild.append(parrafo);

console.log(listaNodos);
console.log(listaHTML);
