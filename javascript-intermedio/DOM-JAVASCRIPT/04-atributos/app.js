const titulo = document.querySelector(".titulo");

//Obtener Valor Atributo
titulo.getAttribute("class");

// Agregar Atributo
titulo.setAttribute("id", "nuevo-valor");

// Verifica si existe
titulo.hasAttribute("href");

// Eliminar atributo
titulo.removeAttribute("href");





const listas = document.querySelectorAll("ul li")

for(let lista of listas){
    let verificar = lista.matches(".selected");

    let texto = `El elemento con el texto ${lista.textContent} ${verificar ? "Si tiene la clase" : "No tiene clase"} selected`;

    // console.log(texto);
}


const liSelected = document.querySelector(".selected");

console.log( liSelected.closest("li") );