// FUNCION PARA CREAR LOS CARDS DE LOS PRODUCTOS EN EL INDEX.HTML
function createCard(products,containerSelector){
  const productsSelector = document.getElementById(containerSelector);
  let productsTemplate = "";

  // Generar tarjeta de producto para cada producto y agregarla al template
  for (const product of products) {
    productsTemplate += `
    <a class="product-card" href="./details.html?id=${product.id}">
      <img class="product-img" src="${product.images[0]}" alt="${product.title}" />
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.description}</span>
      <div class="product-price-block">
        <span class="price">$/.${product.price}</span>
        <span class="discount">50% Off</span>
      </div>
      <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
      </div>
    </a>`;
  }
  productsSelector.innerHTML=productsTemplate;
}

createCard(products,"products")





// Función para crear una tarjeta de producto
// function createProductCard(product) {
//   return `<a class="product-card" href="./details.html?id=${product.id}">
//               <img class="product-img" src="${product.images[0]}" alt="${product.title}" />
//               <div class="product-info">
//                   <span class="product-title">${product.title}</span>
//                   <span class="product-description">${product.description}</span>
//                   <div class="product-price-block">
//                       <span class="price">$/.${product.price}</span>
//                       <span class="discount">50% Off</span>
//                   </div>
//                   <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
//               </div>
//           </a>`;
// }

// // Función para renderizar los productos en el contenedor especificado
// function renderProducts(products, containerSelector) {
//   const productsSelector = document.querySelector(containerSelector);
//   let productsTemplate = "";

//   // Generar tarjeta de producto para cada producto y agregarla al template
//   for (const product of products) {
//       productsTemplate += createProductCard(product);
//   }
//   // Mostrar el template de productos en el contenedor
//   productsSelector.innerHTML = productsTemplate;
// }
// renderProducts(products, "#products");
















