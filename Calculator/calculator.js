// const numero1 = parseFloat(prompt("Ingrese el primer numero :"));
// const numero2 = parseFloat(prompt("Ingrese el segundo numero:"))

// const dividir = (numero1,numero2) => (numero1/numero2); // funcion de retorno

// const calcularCociente = (num1,num2)=>{
//     const resultado = dividir(num1,num2)
//     console.log(`El resultado de la operación es: ${resultado}`);
// }

// calcularCociente(numero1,numero2,dividir)

function ingresarNumeros() {
    const numero1 = prompt("Introduce el primer número:");
    const numero2 = prompt("Introduce el segundo número:");    
    dividir(numero1,numero2,mensajeError);
}
function dividir(num1, num2, mensaje) {
    if (isNaN(num1) || isNaN(num2)) {
        mensaje('Error: Ambos valores deben ser numéricos.');
        console.log(mensaje)
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num2 === 0) {
        mensajeError('Error: No se puede dividir por cero.');
        return;
    }
    const resultado = num1 / num2;
    console.log(resultado)
    mostrarResultado(resultado);
}
// Callback para manejar los errores 
function mensajeError(mensaje) {
    alert(mensaje);
    console.log(mensaje)
}

function mostrarResultado(resultado) {
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = `El resultado de la división es: ${resultado}`;
}
// Iniciar la solicitud de números al cargar la página
document.addEventListener('DOMContentLoaded', ingresarNumeros);
//ingresarNumeros();