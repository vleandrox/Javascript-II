// SYNTACTIC SUGAR
// Los Templates Strings
const nombre = "Ana";
console.log(`Hola ${nombre}! Cómo estás?`);

// El operador lógico AND (&&)
const meGustaLaPizza = true;
const hayPizza = true;
if (meGustaLaPizza && hayPizza) {
console.log("¡Genial! Voy a comer pizza.");
} else {
console.log("No hay pizza o no me gusta.");
}

// El operador lógico OR (||)
const tengoHambre = false;
const esHoraDeComer = true;
if (tengoHambre || esHoraDeComer) {
console.log("Es hora de comer algo.");
} else {
console.log("No es necesario comer ahora.");
}

// El operador de coalescencia nula (??)
const entrada = null;
const salida = entrada ?? "predeterminado";
console.log(salida); // "predeterminado"
var a = null;
var b = 10;
var resultado = a ?? b;
console.log(resultado); // Devuelve 10, porque a es nulo
var c = 8;
var d = 20;
resultado = c ?? d;
console.log(resultado); // Devuelve 8, porque c no es nulo ni indefinido

//El encadenamiento opcional
const persona = {
    nombre: "Laura",
    direccion: {calle: "Principal",numero: 123}
};
console.log(persona.direccion?.codigoPostal); // undefined
console.log(persona?.direccion?.calle); // "Principal"

// Los Parametros Predeterminados
function saludo(nombre = "amigo") {
    return `¡Hola, ${nombre}!`;
}
console.log(saludo("Pedro")); // ¡Hola, Pedro!
console.log(saludo()); // ¡Hola, amigo!

// El operador ++
let contador1 = 0;
console.log(++contador1); // Imprime 1
// La variable contador es incrementada antes de la impresión.
let contador2 = 0;
console.log(contador2++); // Imprime 0
console.log(contador2); // Imprime 1
// La variable contador es incrementada luego de la impresión.