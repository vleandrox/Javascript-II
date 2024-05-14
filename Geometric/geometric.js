import { rectangulos } from './rectangleData.js'
import { calcularPerimetro }  from './perimetro.js'
import { calcularArea } from './area.js'

function agregarFilasTabla(rectangulos) {    
    const tbody = document.getElementById("datos");
    tbody.innerHTML = ''; // Eliminar esa linea de inicio

    rectangulos.forEach((rectangulo) => {
        const fila = `<tr>
                        <td>${rectangulo.altura}</td>
                        <td>${rectangulo.ancho}</td>
                        <td>${calcularPerimetro(rectangulo)}</td>
                        <td>${calcularArea(rectangulo)}</td>
                     </tr>`;
        console.log(fila);
        tbody.innerHTML += fila;
    });
}
agregarFilasTabla(rectangulos);