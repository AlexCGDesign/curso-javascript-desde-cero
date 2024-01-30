const hojaDeEstilos = document.styleSheets[0];
const selectorContenedor = hojaDeEstilos.cssRules[2];

console.log( selectorContenedor.style.setProperty("border", "3px solid red") );

console.log( selectorContenedor.style.setProperty("font-family", "cursive", "important") );

console.log( selectorContenedor.style.getPropertyPriority("color") );