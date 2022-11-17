const urlFetchProductos = new URL("http://localhost:8080/geekmitive/productos/getAll");

let arrayProductos;

fetch(urlFetchProductos)
    .then(response => response.json())
    .then(data => arrayProductos = data)
    .catch(err => console.log(err));

if (localStorage.getItem("contadorCarrito")){
    $("#iconoCarrito").append(`<span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">${localStorage.getItem("contadorCarrito")}</span>`);
}

function verDetalle(json) {

    let htmlImagenes = `<div class="small-img-col">
                            <img src=${json.imagen} width="100%" class="small-img" alt="Kirby Cap" onclick="changeMainSrc(this)">
                        </div>`;


    let main = document.getElementById("main");
    main.innerHTML = `<section class="container sproduct my-2 pt-2" >
        <div class="row ">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 bp-1" src=${json.imagen} id="MainImg" alt="Kirby Cap">
                
            </div>
            <div class="col-lg-6 col-md-12 col-12">
                <h3 class="py-4 product_name" id="nombreProducto">${json.nombre}</h3>
                <h2 class="price">$${json.precio} MXN</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                    <span class="rating_avg">(4.7)</span>
                </div>
                <select class="my-3 select" id="cantidad">
                    <option value="">Cantidad</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select>
                <button class="buy-btn" onclick="agregarProducto()">Añadir a Carrito<i class="fa-solid fa-cart-shopping"></i></button>
                <h4 id="detallesp" class="mt-5 mb-5">Detalles de producto</h4>
                <span class="product_description">${json.descripcion}</span>
            </div>
        </div>
    </section>
    <br>`;
  
}

//función subarreglos del carrito

const agregarProducto = () => {  

    if ($("#cantidad").val() == "") return;

    let nombreProducto =  $("#nombreProducto")[0].textContent;
    let jsonProducto = { ...arrayProductos.filter(i => i.nombre === nombreProducto)[0]}; // hace un filtro por el nombre. 
    jsonProducto.cantidad = Number($("#cantidad").val());
    
    let productoCarrito = arregloCarrito.filter(i => i.nombre === nombreProducto);
    if (productoCarrito.length == 0){
        arregloCarrito.push(jsonProducto);
    } else {
        productoCarrito[0].cantidad = Number($("#cantidad").val());
    }
    let init =0;
    contadorCarrito = arregloCarrito.reduce((a,b) => { return a + b.cantidad}, init);
    if($("#cart_menu_num").length>0){
        $("#cart_menu_num").text(contadorCarrito);
    } else {
        $("#iconoCarrito").append(`<span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">${contadorCarrito}</span>`);
    }

    Swal.fire({
        icon: 'success',
        title: 'Tu producto ha sido añadido',
        showConfirmButton: false,
        timer: 1500
      })
}

const changeMainSrc = (obj) =>{
    document.getElementById('MainImg').src=obj.src;
};