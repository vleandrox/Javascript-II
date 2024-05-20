const buySelector = document.getElementById("mensajeFinal");

function finalizarCompra() {
  Swal.fire({
    title: "¿Estás seguro de que deseas finalizar la compra?",
    icon: "question",
    showCancelButton: true,
    cancelButtonText: "No",
    confirmButtonText: "Sí",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("cart", JSON.stringify(cartproducts));
      const ventaTerminada = `
    <article class="detproduct-card" id="cartproducts">
      <div class="product-card">
        <div class="carritovacio"> 
          <span>NO HAY PRODUCTOS EN SU CARRITO</span>
        </div>
      </div>
    </article>            
      <article class="totproduct-card" id="totalcart">
        <span class="titulo-resumen">Resumen del Pedido</span>
          <div class="totproduct-price">
            <span class="total-resumen">Total</span>
            <span class="precio-resumen">S/. 0</span>
          </div>
          <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
        <div class="product-comprar">
          <button class="button-comprar" onclick=""> Comprar</button>
        </div>
    </article>`;
      buySelector.innerHTML = ventaTerminada;

      Swal.fire({
        title: "¡Compra finalizada!",
        text: "Gracias por tu compra !!!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
    }
  });
}
