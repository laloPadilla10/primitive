function cargarCarrito() {

  let main = document.getElementById("main");
  main.innerHTML =

    `<div class="container  text-center">
       <div class="row">
         <div class="col col-md-2"></div>
           <div class="col-md-8">
             <table id="tableShopping" class="table">
              <thead>
                <tr>
                  <th class="tablecar">Imagen</th>
                  <th class="tablecar">Producto</th>
                  <th class="tablecar">Precio</th>
                  <th class="tablecar">Cantidad</th>
                  <th class="tablecar">Subtotal</th>
                  <th class="tablecar">Borrar</th>
                </tr>
               </thead>
              <tbody id="body"></tbody>
            </table>
           </div>
          <div class="col col-md-2"></div>
       </div>
    </div>
    <div class="container  text-center">     
    <div class="card1">
      <div class="row">
          <div id="TotalCarrito" class="col-sm-7 my-auto text-center" style="display:none">
          </div>
            
          <div class="col-sm-3 text-center my-2">
            <button href="#" class="btn" ${arregloCarrito.length==0 ? "disabled" : ""} onclick="pagar()"> Pagar </button>
          </div>
      <div>
    <div>      
          <div class="row">
              <div class="col text-center mt-4">
                  <small class="text-muted">
                  ¿Tienes un problema con tu compra? <a class="contactanoscarro" href="../html/contactanos.html">¡Contáctanos!</a>
                   </small>
              </div>
          </div>
          </div>`
  
  carritoPrueba(); 
};


//esta función borra elementos del carrito

let remove = obj => {
  arregloCarrito.splice($(obj).parent().parent().index(),1); //elimina el elemento del arreglo carrito. 
  $(obj).parent().parent().remove(); //elimina la fila de mi tabla. 
}


//esta función lee los elementos de mi carrito

let body;


function carritoPrueba() {
  let listaHtml = "";
  let total = 0;
  arregloCarrito.forEach(jsonCarrito => {
    listaHtml += `<tr><td class="td"><img id="imgCarrito" src= ${jsonCarrito.imagen} style="width:100px;heigth:100px;"></td>
      <td class="td">${jsonCarrito.nombre}</td>
      <td class="td">$${jsonCarrito.precio} MXN</td>
      <td class="td"><input type="number" value = ${jsonCarrito.cantidad} min="1" pattern="^[1-50]" style="width:45px;" onChange="cambiarTotal()"></td> 
      <td class="td">$${jsonCarrito.precio * Number(jsonCarrito.cantidad)} MXN</td>
      <td class="td"><a href="#" onclick="remove(this)"><img src="./assets/img/trash.png" style="width:35px;heigth:35px;"></i></a></td>`
      total += jsonCarrito.precio * jsonCarrito.cantidad;
  });
 
 //pinta mi total
  $("#TotalCarrito").append(`<h5 class="tcarrito"> TOTAL =  $${total} MXN</h5>`).show();

  body = document.getElementById("body");
  body.innerHTML = listaHtml;
}

const cambiarTotal = () =>{
  let total = 0;
  $("#body tr").toArray().forEach((tr, i) => {
    let subtotal = arregloCarrito[i].precio * Number($(tr).find("input").val());
    $(tr).find("td:eq(4)").text(`$${subtotal} MXN`);
    total += subtotal;
  });
  $(".tcarrito").remove();
  $("#TotalCarrito").append(`<h5 class="tcarrito"> TOTAL =  $${total} MXN</h5>`);
}

function pagar(){
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por todo Generation!',
    showConfirmButton: true
  }).then(() => {$("#cart_menu_num").remove();});
}



