function addItem(item) {
    const itemHTML =
        `
        <section class="container sproduct my-2 pt-2" >
        <div class="row ">
            <div class="col-lg-4 col-md-12 col-12">
                <img class="img-fluid w-100 bp-1" src="${item.img}" id="MainImg" alt="Product Image">
            </div>
            <div class="col-lg-1 col-12"></div>
            <!-- Texto  -->
            <div class="col-lg-6 col-md-12 col-12">
                <h6>${item.brand}</h6>
                <h3 class="py-4 product_name">${item.name}</h3>
                <h2 class="price">$${item.price} MXN</h2>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half"></i>
                    <span class="rating_avg">(${item.rating})</span>
                </div>
                <select class="my-3 select ">
                    <option>Cantidad</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                </select><br>
                <button class="buy-btn">Añadir a Carrito<i class="fa-solid fa-cart-shopping"></i></button>
                <button class="buy-btn">Comprar ahora <i class="fa-regular fa-credit-card "></i> <i class="fa-brands fa-paypal"></i></button>
                <h4 class="mt-5 mb-5">Detalles de producto</h4>
                <span class="product_description">${item.description}</span>
            </div>
        </div>
    </section>
    <br>
    <hr>`;
  
    const itemsContainer = document.getElementById("product-item");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    name: "Gorra Kirby",
    price:"399",
    brand:"Nintendo",
    img: "https://i.ibb.co/zf4sYLX/kirby1.png",
    rating:"4.7",
    description:"Diseño personalizado: una imagen bordada de Kirby durmiendo decora este sombrero mientras que un par de burbujas flota sobre él. A los fanáticos del personaje de videojuegos les encantará el diseño bordado en este sombrero de contraste.",
  })
  
addItem({
    name:"Tostadora Darth Vader",
    price:"1800",
    brand:"Star Wars",
    img:"https://i.ibb.co/pjq5sNH/toaster.jpg",
    rating:"4.4",
    description:"Lleva a Vader a tu cocina: el icónico casco de Darth Vader es una tostador de trabajo detallada. Especificaciones del producto: chips de sonido Vader y luces en una secuencia de sonido de 10 segundos al tostar. "
})  

addItem({
    name:"",
    price:"",
    brand:"",
    img:"",
    rating:"",
    description:""
}) 
;