/*
function Presupuesto(presupuesto, nombre){

    this.nombre = nombre;
    this.presupuesto = presupuesto;

    this.nuevoGasto = function(gasto){
        this.presupuesto -= gasto;
    }

    this.presupuestoActual = function(){
        console.log(`Hola ${this.nombre}, el saldo actual es de ${this.presupuesto}`);
    };

}

const jordan = new Presupuesto(10000, 'Jordan');
const alexander = new Presupuesto(100000, 'Alexander');

jordan.nuevoGasto(2000);
jordan.presupuestoActual();

alexander.presupuestoActual();
*/

/*
const jordan = {
    nombre: "Jordan",
    saludar(){
        console.log(this.nombre)
    }
}

const alexander = {
    nombre: "Alexander"
}

jordan.saludar = jordan.saludar.bind(alexander);

jordan.saludar();
*/

function GastosMeses(nombre){
    this.nombre = nombre;
    this.gastoMes = 0;

    this.saludar = function(){
        console.log(`Hola ${this.nombre} tus gastos del mes ${this.gastoMes}`);
    }

    this.agregarGastos = function(...gastos){

        gastos.forEach((gasto) =>{
            console.log(this);
            this.gastoMes += gasto;
        });

    }
}

const jordanCuenta = new GastosMeses("Jordan");
const alexanderCuenta = new GastosMeses("Alexander");

jordanCuenta.agregarGastos.apply(alexanderCuenta,[100, 200, 500]);

jordanCuenta.saludar();
alexanderCuenta.saludar();
