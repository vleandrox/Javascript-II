const nombre = "Victor"
const edad = "28"
const profesion = "Ingeniero de Sistemas"
const ubicacion = "Huacho"
const hobby = "Videojuegos"

const datosSelector = document.querySelector("#datospersonales");
// console.log(datosSelector)

// Implementando la Asignación con AND lógico (&&)
let isOnline = false
let respuesta = prompt("¿ESTÁS CONECTADO? SI o NO").toUpperCase();

// Asignación con AND lógico
while (respuesta !== 'SI' && respuesta !== 'NO') {
    respuesta = prompt("Por favor, ingresa solo SI o NO, ¿ESTÁS CONECTADO?").toUpperCase();
}

if(respuesta == 'SI'){
    isOnline = true
    console.log(isOnline)
    //Implementando Template String
    const templateString = `
    <span>Mi nombre es <b>${nombre}</b> y mi Apellido es <b>${edad}</b>, tengo la profesion de <b>${profesion}</b>.</span>
    <br><span>Radico en la ciudad de <b>${ubicacion}</b> - Lima y en mis tiempos libres me gusta jugar <b>${hobby}</b></span>`;
    datosSelector.innerHTML = templateString
}else{
    isOnline = false
    console.log(isOnline)
    window.alert("USUARIO ESTA DESCONECTADO !!!")
}

//Implementando el Encadenamiento opcional