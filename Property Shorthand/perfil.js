/*Property Shorthand*/
const snombre = document.getElementById("nombre");
const sedad = document.getElementById("edad");
const scorreo = document.getElementById("correo");
const saltura = document.getElementById("altura");
const speso = document.getElementById("peso");

// 1.Definición del Objeto con Property Shorthand
const nombre = "Victor";
const edad = "27";
const correo = "leandro@gmail.com";
const altura = "168cm";
const peso = "60kg";

const datospersonales = {nombre,edad,correo,altura,peso};
console.log(datospersonales )

const pregunta = prompt("Ingrese su edad");
if (pregunta >= 18 ) {
  snombre.textContent = `Nombre: ${datospersonales.nombre}`;
  sedad.textContent = `Edad: ${datospersonales.edad}`;
  scorreo.textContent = `Correo: ${datospersonales.correo}`;
  saltura.textContent = `Altura:  ${datospersonales.altura}`;
  speso.textContent = `Peso:${datospersonales.peso} ` ;
}
else{
  snombre.textContent = `Nombre: ${datospersonales.nombre}`;
  sedad.textContent = `Edad: ${datospersonales.edad}`; 
}

// Desestructuración de objetos
let frutas = ["manzana", "banana", "naranja"];
let [fruta1, fruta2, fruta3] = frutas;
console.log(fruta1); // manzana
console.log(fruta2); // banana
console.log(fruta3); // naranja