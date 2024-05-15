
// Las callbacks son funciones que se pasan como argumentos a otras funciones y se
// ejecutan más tarde.

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const operar = (num1, num2, operacion) => operacion(num1, num2);
const resultado1 = operar(20, 3, sumar);
const resultado2 = operar(20, 3, restar);


const imprimirEnConsola = (num1, num2, operar) => {
    const resultado = operar(num1, num2);
    console.log(`El resultado de la operación es: ${resultado}`);
};
imprimirEnConsola(20, 3, sumar);
imprimirEnConsola(20, 3, restar);

//¿Cómo se implementa la callback en forEach?
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => {
    console.log(numero * 2);
});

// ¿Cómo se implementa la callback en map?
const numeross = [1, 2, 3, 4, 5];
const cuadrados = numeross.map(numeross => numeross * numeross);
console.log(cuadrados); // [1, 4, 9, 16, 25]