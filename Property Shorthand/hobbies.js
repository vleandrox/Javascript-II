// 2.Define el JavaScript 
const hobbies = {
    enPareja:["Caminar","Ver Peliculas","Natacion","Cantar"],
    conAmigos:["Futbol","Videojuegos","Gimnasio","Bailar"],
    conFamilia:["Voley","Ciclismo","Viajes","Cocinar"]
}

// 3.Aplica desestructuración de arrays
const { enPareja: [,, tercerHobbyEnPareja], conFamilia: [,,, cuartoHobbyConFamilia] } = hobbies;

console.log(tercerHobbyEnPareja); // Natacion
console.log(cuartoHobbyConFamilia); // Cocinar

const divselector = document.getElementById("hobbies-seleccionados");
const templatestring =`Mi tercer hobby en pareja es <strong>${tercerHobbyEnPareja}</strong>, 
mientras que mi cuarto hobby en familia es <strong>${cuartoHobbyConFamilia}</strong>.`

divselector.innerHTML=templatestring
