var numero = 18;
var nombre = "Victor";
var booleano = true;
console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof booleano);
var persona = { nombre: "Juan", edad: 18 };
if ("nombre" in persona) {
    console.log("La propiedad 'nonbre' esta en el objeto persona . ");
}
if ("apellido" in persona) {
    console.log("La propiedad 'apellido' está en el objeto persona.");
}
else {
    console.log("La propiedad 'apellido' no está en el objeto persona.");
}
//operador is 
function esNumero(valor) {
    return typeof valor === "number";
}
function doSomething(valor) {
    if (esNumero(valor)) {
        console.log("El valor es un número:", valor);
    }
    else {
        console.log("El valor no es un número.");
    }
}
doSomething(10);
doSomething("Hola");
