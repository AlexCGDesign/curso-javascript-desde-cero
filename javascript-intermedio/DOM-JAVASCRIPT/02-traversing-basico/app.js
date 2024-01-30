// Traversing
const body = document.body;
const contenedorBody = body.children[0];
const primerHijo = contenedorBody.firstElementChild;
const ultimoHijo = contenedorBody.lastElementChild;
const listaItem = ultimoHijo.previousElementSibling.firstElementChild;

primerHijo.nextElementSibling.src = "./assets/js.svg";
listaItem.textContent = "He cambiado el texto de la lista con el DOM";


const listaNodos = document.body.childNodes;
const coleccionHTML = document.body.children;


console.log( Array.from(listaNodos) );