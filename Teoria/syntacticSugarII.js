// TEMA02
// Syntactic Sugar II
// La desestructuración de un objeto en JavaScript
const objeto = { propiedad1: 'valor1', propiedad2: 'valor2' };
const { propiedad1, propiedad2 } = objeto;
console.log(propiedad1); // 'valor1'
console.log(propiedad2); // 'valor2'

//puedes asignar las propiedades de un objeto a variables con diferentes nombres y asignar nuevas propiedades.
const objeto2 = { nombre: 'Ana', edad: 25 };
const { nombre: name, edad: age, lastName = 'Egg' } = objeto2;
console.log(name); // 'Ana'
console.log(age); // 25
console.log(lastName); // 'Egg'

//desestructurar un objeto que se pasa como parámetro de una función.
function mostrarUsuario({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}
const usuario = { nombre: 'Ana', edad: 25 };
mostrarUsuario(usuario); // 'Nombre: Ana, Edad: 25'

// El operador de propagación, representado por tres puntos (...)
const objetoOriginal = { nombre: "Juan", edad: 30 };
const copiaObjeto = { ...objetoOriginal };
// spread operator también puede utilizarse para combinar las propiedades de dos o más objetos
const nombre2 = { nombre: "Juan" };
const edad2 = { edad: 30 };
const combinado = { ...nombre2, ...edad2 };
console.log(combinado); // { nombre: "Juan", edad: 30 }


//El operador rest (...) en objetos permite recoger las propiedades restantes que no se han desestructurado de un objeto.
const objetoOriginal2 = { nombre: "Juan", edad: 30 };
const usuario2 = {
    nombreu: 'Carlos',
    edadu: 28,
    profesionu: 'Desarrollador',
    paisu: 'España'
};
const { nombreu, edadu, ...detalles } = usuario2;
console.log(nombreu); // Carlos
console.log(edadu); // 28
console.log(detalles); // { profesion: 'Desarrollador', pais: 'España' }

// El operador rest resulta especialmente útil para filtrar propiedades no deseadas de un objeto
// creando un nuevo objeto sin esas propiedades.
const producto = {
    id: 1,
    descripcion: 'Teclado mecánico',
    precio: 99.99,
    fabricante: 'Teclados S.A.'
};
// Supongamos que queremos un nuevo objeto sin la propiedad 'fabricante'
const { fabricante, ...productoSinFabricante } = producto;
console.log(productoSinFabricante);
// { id: 1, descripcion: 'Teclado mecánico', precio: 99.99 }


//¿Cómo se implementa la estructuración de objetos?
//El Property Shorthand
const nombre = "Carlos";
const edad = 30;
const persona = { nombre: nombre, edad: edad };
console.log(persona); // { nombre: "Carlos", edad: 30 }

const personaEstructurada = { nombre, edad };
console.log(personaEstructurada); // { nombre: "Carlos", edad: 30 }

// ¿Cómo se implementa la desestructuración de arrays?
// La desestructuración de un array
const arrayDeValores = ['valor1', 'valor2', 'valor3'];
const [variable1, variable2, variable3] = arrayDeValores;
console.log(variable1); // 'valor1'

// Un array más grande y solo te interesan algunos de los primeros elementos
const numeros = [1, 2, 3, 4, 5];
const [uno, dos] = numeros;
console.log(uno); // 1

//omitir elementos que no necesitas simplemente dejando un espacio en blanco
const numeross = [1, 2, 3, 4, 5];
const [, , tres, cuatro,cinco] = numeross;
console.log(cinco); // 5

// Spread operator en arrays? 
// El operador de propagación (spread operator) en JavaScript se emplea con el 
// símbolo ... para "esparcir" los elementos de un array
const primerArray = [1, 2, 3];
const segundoArray = [4, 5, 6];
const combinados = [...primerArray,...segundoArray];
console.log(combinados); // [1, 2, 3, 4, 5, 6]

// Concatenación de arrays y la adición de nuevos elementos
const parte1 = [1, 2];
const parte2 = [4, 5];
const combinadoConNuevoElemento = [...parte1, 3, ...parte2];
console.log(combinadoConNuevoElemento);

// ¿Cómo se implementa el rest operator en arrays?
// El operador rest (o spread operator) en JavaScript, representado por tres puntos
// (...), permite manejar un número indeterminado de elementos en arrays
const numerosc = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numerosc;
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]