function Mascota(nombre, raza){
    this.nombre = nombre;
    this.raza = raza;
}

Mascota.prototype.ladrar = function(){
    console.log("Ladrar");
}

Mascota.prototype.sonAmados = true;
const loki = new Mascota("loki", "mestiza");

let id = Symbol("id");

const loki2 = {
    nombre: "Loki",
    edad: 24,
    esGuapo: true,
    [id]: "12345"
}

let arreglo = Object.entries(loki2);
console.log(arreglo);

for (const [clave, valor] of arreglo) {
    console.log(valor);
    console.log(clave);
}