"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Jose";
var edad = 25;
var profesion = "Ingeniero de Datos";
var ubicacion = "Lima";
var hobby = "Futbol";
var data = {
    nombre: nombre,
    edad: edad,
    profesion: profesion,
    ubicacion: ubicacion,
    hobby: hobby
};
var familiar1 = {
    nombre: "María",
    edad: 28,
    profesion: "Profesora",
    ubicacion: "Cuzco",
    hobby: "Bailar"
};
var familiar2 = {
    nombre: "Carlos",
    edad: 35,
    profesion: "Abogado",
    ubicacion: "Trujillo",
    hobby: "Cantar"
};
var family = [data, familiar1, familiar2];
console.log(family);
//  Actividad: Implementando el operador “Typeof”
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof profesion);
console.log(typeof ubicacion);
console.log(typeof hobby);
console.log(typeof family);
console.log(typeof data);
//  Actividad: Implementando el operador “In”
if ("edad" in familiar1) {
    console.log("La propiedad se encuentra en el objeto");
}
if ("apellido" in familiar1) {
    console.log("La propiedad se encuentra en el objeto");
}
else {
    console.log("La propiedad no se encuentra en el objeto");
}
