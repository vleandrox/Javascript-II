const cartfavoritos = JSON.parse(localStorage.getItem("favoritos"));

function createFavoritos(cartfavoritos) {
  return `
  <div class="cards">
    <button class="btn-eliminarfav" onclick="eliminarFavorito(event)" id="${cartfavoritos.id}">
        <img src="assets/delete.png" class="imgDel" alt="Eliminar">
    </button>
    <a class="product-card" href="./details.html?id=${cartfavoritos.id}">   
        <img class="product-img" src="${cartfavoritos.image}" alt="${cartfavoritos.title}" />
        <div class="product-info">
            <span class="product-title">${cartfavoritos.title}</span>
            <span class="product-description">${cartfavoritos.description}</span>
            <div class="product-price-block">
                <span class="price">$/.${cartfavoritos.price}</span>
                <span class="discount">Cantidad:${cartfavoritos.quantity}</span>
            </div>      
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>      
        </div> 
    </a>
</div>`;
}


function eliminarFavorito(event) {
  const favoritosSelector = document.getElementById("favoritos");
  const obtenerid = event.currentTarget.getAttribute("id"); 

  // Encontrar el índice del producto a eliminar en el array
  const indexAEliminar = cartfavoritos.findIndex((cartfavoritos) => cartfavoritos.id === obtenerid );
  console.log(indexAEliminar)
  if (indexAEliminar !== -1) {
    cartfavoritos.splice(indexAEliminar, 1); // Eliminar el producto del array
  }
  // Volver a almacenar el array actualizado en el localStorage
  localStorage.setItem("favoritos", JSON.stringify(cartfavoritos));
  const favoritosTemplate = cartfavoritos.map(createFavoritos).join("");
  favoritosSelector.innerHTML = favoritosTemplate;
  printFavoritos();
 
}

function printFavoritos(){
  const favoritosSelector = document.getElementById("favoritos");
  if (cartfavoritos && cartfavoritos.length > 0) {
    // Si hay productos en el carrito, renderiza los productos
    favoritosSelector.innerHTML = cartfavoritos.map(createFavoritos).join("");
  } else {
    // Si no hay productos en el carrito, renderiza la vista de "carrito vacío"
    const ventaTerminada = `
      <article class="detproduct-card" id="cartfavoritos">
                <div class="product-card">
                  <div class="carritovacio"> 
                    <span>SIN PRODUCTOS FAVORITOS.</span>
                  </div>
                </div>
              </article>`;
    favoritosSelector.innerHTML = ventaTerminada;
    console.log(cartfavoritos)
  }
}

printFavoritos();
