//Actividad: Implementando el Encadenamiento opcional

//1. Definiendo un ojeto llamado misDatosFisicos
const misDatosFisicos = {
    nombre:"Victor",
    edad:"26",
    direccion : {calle: "Av.Real",numero: 123},
    altura:"168cm",
    peso:"60kg",
    hobby:"Videojuegos"
}

//Actividad: Definiendo una función con parámetros predeterminados.
function imprimirEtiqueta(id="pre3"){
    // 2. Utiliza document.getElementById para acceder al contenedor div con id perfil.
    const contenedor = document.getElementById(id);
    // 3. Crea una variable contenidoPerfil y usa template strings para incluir los datos del objeto en HTML.
    const contenidoPerfil = `
    <b><span>${misDatosFisicos.nombre}</span></b><br>
    <span> Edad : ${misDatosFisicos.edad}   </span><br>   
    <span> Direccion :  ${misDatosFisicos?.direccion?.calle} ${misDatosFisicos?.direccion?.numer || "S/N" } </span><br>
    <span> Altura :  ${misDatosFisicos.altura} </span><br>
    <span> Peso :  ${misDatosFisicos.peso}  </span><br>
    <span> Hobby : ${misDatosFisicos.hobby} </span><br>`
    // 4. Operador lógico or (||) en linea 18

    // 5. Asigna el HTML generado a innerHTML del contenedor perfil.
    contenedor.innerHTML = contenidoPerfil    
    return id
}

imprimirEtiqueta() //No se proporciona nada debe imprimir en la etiqueta pre3
imprimirEtiqueta(id="pre5")  //Si se proporciona debe imprimirir en la etiqueta que corresponda
