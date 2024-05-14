// Una funcion definidad
function decirHola(nombre) {
    console.log("Hola, " + nombre);
}
decirHola("Alejandro");

// Funcion y se aplica el "return"
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 7);
console.log(resultado); // Imprime 12

//¿Cómo se programa una función “flecha”?
const calcularLaMitad = (num) => {
    num = num / 2;
    return num;
};

const calcularElDoble = num => {
    num = num * 2;
    return num;
};
const calcularElTriple = num => num * 3;
console.log(calcularLaMitad(2))


// ¿Cómo se programan las funciones anónimas?
// Las funciones anónimas
const nombres = ["Adri","Elo","Igna","Ori","Uli"];
const decirHola = function(nombre) {
    console.log("Hola, " + nombre);
}
nombres.forEach(decirHola)

// es lo mismo que:
nombres.forEach(function(nombre) {
    console.log("Hola, " + nombre);
})
// y con sintáxis de función flecha:
nombres.forEach(nombre=> console.log("Hola, " + nombre))