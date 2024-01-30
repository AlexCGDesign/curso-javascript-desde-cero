const contenedor = document.querySelector(".contenedor");
const button = document.querySelector("#btn");

function handleEvent(){
    console.log(`Has dado click en este NODO ELEMENTO ${this.tagName}`);
}

function handleEventStop(e){
    e.stopPropagation();
    console.log(`Has dado click en este NODO ELEMENTO ${this.tagName}`);
}

button.addEventListener("click", handleEventStop, {
    once: true
});

contenedor.addEventListener("click", handleEvent);

document.body.addEventListener("click", handleEventStop);

