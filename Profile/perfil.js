
//Actividad: Implementando el Encadenamiento opcional
class misDatosFisicos{
    constructor(nombre,edad,direccion,altura,peso,hobby){
        this.nombre=nombre
        this.edad=edad
        this.direccion=direccion
        this.altura=altura
        this.peso=peso
        this.hobby=hobby
    }  
}
// class direccion{
//     constructor(calle,numero,ciudad){
//         this.calle=calle
//         this.numero=numero
//         this.ciudad=ciudad
//     }
// }
const direccion = {calle: "Av. Real La Colmena",numero: "S/N",ciudad: "Huacho"};
console.log(direccion)
const misDatos = new misDatosFisicos('Victor Alarcon','28',direccion,'168cm','60kg','Videojuegos')
console.log(misDatos)

const contenedor = document.getElementById("perfil");
console.log(contenedor)

const contenidoPerfil = `
<b><span>${misDatos.nombre}</span></b><br>
<span> Edad : ${misDatos.edad}   </span><br>
<span> Direccion :  ${direccion.calle} ${direccion.numero} ${direccion.ciudad}  </span><br>
<span> Altura :  ${misDatos.altura} </span><br>
<span> Peso :  ${misDatos.peso}  </span><br>
<span> Hobby : ${misDatos.hobby} </span><br>`

contenedor.innerHTML = contenidoPerfil