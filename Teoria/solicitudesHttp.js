const miPromesa = new Promise((resolve, reject) => {
    const todoBien = true; // Simulación de éxito o fallo.
    if (todoBien) {
        resolve('Operación exitosa.');
    } else {
        reject('Error en la operación.');
    }
});

miPromesa
.then((resultado) => console.log(resultado)) // 'Operación exitosa.'
.catch((error) => console.error(error)) // 'Error en la operación.'


// COMO SE MANJEA EL ASINCRONISMO
async function operacionAsincrona() {
    try {
        const resultado = await miPromesa;
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}
operacionAsincrona();

// ¿Qué define una estructura de try/catch?
try {
    const resultado = operacionAsincrona();
    console.log(resultado);
} catch (error) {
    console.log('Se ha producido un error:', error.message);
}


// ¿Cómo se consume una API con fetch?

fetch('https://api.ejemplo.com/datos')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('ERROR:', error));

// Otra altternativa mas morder
async function obtenerDatos() {
    try {
        const response = await fetch('https://api.ejemplo.com/datos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();    
        console.log(data);
    } catch (error) {
        console.error('ERROR:', error);
    }
}
obtenerDatos();

//que es un JSON
`{
    "nombre": "Juan",
    "edad": 30,
    "esEstudiante": false,
    "hobbies": ["fútbol", "pintura"],
    "direccion": {
    "ciudad": "Madrid",
    "pais": "España"
    }
}`

// ¿Cómo se programa con JSON?
// JSON PARSE
const jsonText = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(jsonText);
console.log(obj.name);
console.log(obj);
// Salida: John

// JSON STRINGIFY
const objString = {name: "John", age: 30, city: "New York"};
const jsonTexts = JSON.stringify(objString);
console.log(jsonTexts);
// Salida: '{"name":"John","age":30,"city":"New York"}'


async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        // Espera a que la solicitud fetch se complete
        if (!response.ok) {
            throw new Error(`Network response was not ok`);
        }
        const data = await response.json();
        // Espera a que el cuerpo de la respuesta se convierta a JSON
        console.log(data); // Maneja los datos JSON
    } catch (error) {
        console.error('Hubo un problema con la operación fetch:', error);
    }
}
fetchJSON('url_del_archivo_json');