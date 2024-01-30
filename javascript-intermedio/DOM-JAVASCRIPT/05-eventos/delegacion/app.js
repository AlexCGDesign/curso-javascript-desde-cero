const contenedor = document.querySelector(".contenedor");

function handlerSection(e){
    if(e.target.matches(".button-color")){
        const getColor = e.target.getAttribute("data-color");

        e.currentTarget.style.backgroundColor = getColor;
        
        console.log(e.currentTarget);
    }
}

contenedor.addEventListener("click", handlerSection);