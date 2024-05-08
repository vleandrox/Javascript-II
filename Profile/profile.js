const nombre = "Victor"
const apellido = "Alarcón"
const profesion = "Ingeniero de Sistemas"
const ubicacion = "Huacho"
const hobby = "Videojuegos"

const datosSelector = document.querySelector("#datospersonales");
// console.log(datosSelector)

// Implementando la Asignación con AND lógico (&&)
let isOnline = false
const pregunta = prompt("¿ESTAS CONECTADO? SI o NO")

if(pregunta.toUpperCase() == 'SI'){
    isOnline = true
    console.log(isOnline)
    const templateDatos = `
    <span>Mi nombre es <b>${nombre}</b> y mi Apellido es <b>${apellido}</b>, tengo la profesion de <b>${profesion}</b>.</span>
    <br><span>Radico en la ciudad de <b>${ubicacion}</b> - Lima y en mis tiempos libres me gusta jugar <b>${hobby}</b></span>`;
    datosSelector.innerHTML = templateDatos
}else{
    isOnline = false
    console.log(isOnline)
    window.alert("USUARIO ESTA DESCONECTADO !!!")
}