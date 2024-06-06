import { Data } from './data';

const nombre: string = "Jose"
const edad: number = 25
const profesion: string = "Ingeniero de Datos"
const ubicacion: string = "Lima"
const hobby: string = "Futbol"

const data: Data = {
    nombre: nombre,
    edad: edad,
    profesion: profesion,
    ubicacion: ubicacion,
    hobby: hobby
}

const familiar1 = {
    nombre: "María",
    edad: 28,
    profesion: "Profesora",
    ubicacion: "Cuzco",
    hobby: "Bailar"
};
const familiar2 = {
    nombre: "Carlos",
    edad: 35,
    profesion: "Abogado",
    ubicacion: "Trujillo",
    hobby: "Cantar"
};

const family = [data, familiar1, familiar2]
console.log(family)

//  Actividad: Implementando el operador “Typeof”
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof profesion)
console.log(typeof ubicacion)
console.log(typeof hobby)
console.log(typeof family)
console.log(typeof data)

//  Actividad: Implementando el operador “In”
if ("edad" in familiar1) {
    console.log("La propiedad se encuentra en el objeto")
}
if ("apellido" in familiar1) {
    console.log("La propiedad se encuentra en el objeto")
} else {
    console.log("La propiedad no se encuentra en el objeto")
}

// Actividad: Implementando el operador “Is”
function esNumero(valor: any): valor is number {
    return typeof valor === "number";
}
function doSomething(valor: any) {
    if (esNumero(valor)) {
        console.log("El valor es un número:", valor);
    } else {
        console.log("El valor no es un número.");
    }
}
doSomething(10);
doSomething("Hola");