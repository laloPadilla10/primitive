function cargarCarrito (){

  let main = document.getElementById("main");
  main.innerHTML = 

  `<main class="container-fluid">
  <page-title class="row justify-content-center my-3">
    <div class="col text-center">
      <h1>Mi Carrit UwU</h1>
    </div>
  </page-title>

  <section class="row m-2">
    <!--- Artículos del carrito --->
    <section class="col-sm-9 mb-2">
      <!--- Elemento en carrito -->

          <div id="fila-1"> <h2 class="text-center">Tu carrito está vacío :( </h2></div>
      </div>
      <!--- Carta con botón de pago-->
      <div class="card">
        <div class="row">

          <table>
            <thead>
              <tr>
                <th>imagen</th>
                <th>producto</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>borrar</th>
              </tr>
            </thead>
            <tbody id="body"></tbody>
          </table>

          <div id="totalCarrito" class="col-sm-7 my-auto text-center">
             <!-- <h5> </h5>-->
            </div>
          
          <div class="col-sm-3 text-center my-2">
            <button href="#" class="btn btn-light"> Pagar </button>
          </div>
        </div>
        <div class="row">
            <div class="col text-center mt-4">
                <small class="text-muted">
                ¿Tienes un problema con tu compra? ¡Contáctanos!
            </small>
              </div>
        </div>
    
    </section>`;
    carritoPrueba();
};

let body;


function carritoPrueba () {
   let productosCarrito = arrayProductos.filter(a => a.name.includes("Mochila"));
   let listaHtml = "";
   productosCarrito.forEach(jsonCarrito => {
   listaHtml += '<tr><td><img src=' + jsonCarrito.img + ' style="width:100px;heigth:100px;"></td>' + 
   '<td>' + jsonCarrito.name + '</td>' +
   '<td>' + jsonCarrito.price + '</td>' +
   '<td> <input type="number" value = 3 min="1" pattern="^[1-50]" style="width:45px;"> </td>' +
   '<td><a href="#" onclick="function(){this.remove()}"><img src="./assets/img/trash.png" style="width:20px;heigth:20px;"></a></td>'
   }); 
   body = document.getElementById("body");
   body.innerHTML = listaHtml;

} 


