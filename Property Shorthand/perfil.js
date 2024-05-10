/*Property Shorthand*/
const snombre = document.getElementById("nombre");
const sedad = document.getElementById("edad");
const scorreo = document.getElementById("correo");
const saltura = document.getElementById("altura");
const speso = document.getElementById("peso");

const nombre = "Victor";
const edad = "27";
const correo = "leandro@gmail.com";
const altura = "168cm";
const peso = "60kg";

const datos = {nombre: nombre,edad: edad,correo: correo,altura: altura,peso: peso};

const direccion = {av:"Real",numero:"123",ciudad:"Huacho"}

const datospersonales = { nombre, edad, correo, altura, peso,direccion};

console.log(datospersonales);
console.log(datos);

const pregunta = prompt("Ingrese su edad");
if (pregunta >= 18) {
  snombre.textContent = `Nombre: ` + datospersonales.nombre;
  sedad.textContent = `Edad: ` + datospersonales.edad;
  scorreo.textContent = `Correo: ` + datospersonales.correo;
  saltura.textContent = `Altura: ` + datospersonales.altura;
  speso.textContent = `Peso: ` + datospersonales.peso;

}
