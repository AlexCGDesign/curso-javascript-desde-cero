const titulo = document.querySelector(".titulo");
const contenedor = document.querySelector(".contenedor");
const input = document.querySelector("#texto");
const form  = document.querySelector(".form");

function handlerEvent(e){
   console.log(this);
}

titulo.addEventListener("click", handlerEvent);

titulo.removeEventListener("click", handlerEvent);

input.addEventListener("change", function(e){
    titulo.textContent = e.target.value;
});

input.removeEventListener("change", function(e){
    titulo.textContent = e.target.value;
})


