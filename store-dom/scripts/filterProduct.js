
function captureText(event){ 
    // console.log(event.target.value)    
    const capturado = event.target.value  
    const productosFiltrados  = products.filter(producto => {                
        return producto.title.toLowerCase().includes(capturado);                
    });
    // console.log("Productos filtrados:", productosFiltrados);
    createCard(productosFiltrados,"products")
}
 
const searchSelector = document.querySelector("#search")
searchSelector.addEventListener("keyup", event=>captureText(event));



// *** FILTRA CON EL TECLADO  ***
// function actualizarVista(productos) {
//     let productsTemplate = ""; // Inicializa vacio
//     for (const element of productos) { 
//         productsTemplate += createCard(element); // la variable se concatena con el html
//     }
//     productsSelector.innerHTML = productsTemplate; // reemplazamos el contenido dentro del productSelector
// }
