const box = document.querySelector(".box");

window.addEventListener("scroll", ()=>{
    console.log( box.getBoundingClientRect() );
});

/*
{
    "width": 350,
    "height": 299.5,
    "x": 80,
    "y": -44,
    "top": -44,
    "left": 80
    "right": 430,
    "bottom": 255.5,
}
*/