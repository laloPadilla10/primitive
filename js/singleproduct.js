let contadorCarrito =0;

if (localStorage.getItem("contadorCarrito")){
    $("#iconoCarrito").append(`<span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">${localStorage.getItem("contadorCarrito")}</span>`);
}

function verDetalle(json) {

    let htmlImagenes = '';
    let imagenes = json.imagenes;
    for(let i=1; i<imagenes.length; i++){
        htmlImagenes += '<div class="small-img-col">'+
                            '<img src="' + imagenes[i] + '" width="100%" class="small-img" alt="Kirby Cap" onclick="changeMainSrc(this)">'+
                        '</div>';
    }

    let main = document.getElementById("main");
    main.innerHTML = `<section class="container sproduct my-2 pt-2" >
        <div class="row ">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 bp-1" src=${imagenes[0]} id="MainImg" alt="Kirby Cap">
                <div class=" small-img-group">${htmlImagenes}</div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
                <h3 class="py-4 product_name" id="nombreProducto">${json.name}</h3>
                <h2 class="price">${json.price}</h2>
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
                <h4 class="mt-5 mb-5">Detalles de producto</h4>
                <span class="product_description">${json.description}</span>
            </div>
        </div>
    </section>
    <br>
    <hr>`;
  
}


const agregarProducto = () => {  

    if ($("#cantidad").val() == "") return;

    let nombreProducto =  $("#nombreProducto")[0].textContent;
    let jsonProducto = { ...arrayProductos.filter(i => i.name === nombreProducto)[0]}; // hace un filtro por el nombre. 
    jsonProducto.cantidad = Number($("#cantidad").val());
    
    let productoCarrito = arregloCarrito.filter(i => i.name === nombreProducto);
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
    localStorage.setItem("contadorCarrito", contadorCarrito);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu producto ha sido añadido',
        showConfirmButton: false,
        timer: 1500
      })
}

const changeMainSrc = (obj) =>{
    document.getElementById('MainImg').src=obj.src;
};