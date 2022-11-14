function carrito () {
    let main = document.getElementById("main");
    main.innerHTML = '<!-- Content -->'+
    '<!-- <h1 class="glow" id="title">Geekmitive</h1> -->'+
    '<section class="container sproduct my-2 pt-2" >'+
        '<div class="row ">'+
            '<div class="col-lg-5 col-md-12 col-12">'+
                '<img class="img-fluid w-100 bp-1" src="https://i.ibb.co/zf4sYLX/kirby1.png" id="MainImg" alt="Kirby Cap">'+

                '<div class=" small-img-group">'+
                    '<div class="small-img-col">'+
                        '<img src="https://i.ibb.co/zf4sYLX/kirby1.png" width="100%" class="small-img" alt="Kirby Cap">'+
                    '</div>'+
                    '<div class="small-img-col">'+
                        '<img src="https://i.ibb.co/X2JjXW7/kirby2.png" width="100%" class="small-img" alt="Kirby Cap">'+
                    '</div>'+
                    '<div class="small-img-col">'+
                        '<img src="https://i.ibb.co/ymT24hN/kirby4.png" width="100%" class="small-img" alt="Kirby Cap">'+
                    '</div>'+
                    '<div class="small-img-col">'+
                        '<img src="https://i.ibb.co/fn0RG9S/kirby5.png" width="100%" class="small-img" alt="Kirby Cap">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-lg-6 col-md-12 col-12">'+
                '<h6>Home/ Categorías / Accesorios</h6>'+
                '<h3 class="py-4 product_name">Gorra Kirby</h3>'+
                '<h2 class="price">$399 MXN</h2>'+
                '<div class="rating">'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa fa-star"></i>'+
                    '<i class="fa-solid fa-star-half"></i>'+
                    '<span class="rating_avg">(4.7)</span>'+
                '</div>'+
                '<select class="my-3 select">'+
                    '<option>Talla</option>'+
                    '<option>S</option>'+
                    '<option>M</option>'+
                    '<option>L</option>'+
                '</select>'+
                '<select class="my-3 select">'+
                    '<option>Cantidad</option>'+
                    '<option>1</option>'+
                    '<option>2</option>'+
                    '<option>3</option>'+
                    '<option>4</option>'+
                    '<option>5</option>'+
                    '<option>6</option>'+
                    '<option>7</option>'+
                '</select>'+
                '<button class="buy-btn">Añadir a Carrito<i class="fa-solid fa-cart-shopping"></i></button>'+
                '<h4 class="mt-5 mb-5">Detalles de producto</h4>'+
                '<span class="product_description">Diseño personalizado: una imagen bordada de Kirby durmiendo decora este sombrero mientras que un par de burbujas flota sobre él. A los fanáticos del personaje de videojuegos les encantará el diseño bordado en este sombrero de contraste.</span>'+
            '</div>'+
        '</div>'+
    '</section>'+
    '<br>'+
 '<hr>';
}

/* let MainImg = document.getElementById('MainImg');
        let smallImg = document.getElementsByClassName('small-img');

        smallImg[0].onclick = function(){
            MainImg.src = smallImg[0].src;
        }
        smallImg[1].onclick = function(){
            MainImg.src = smallImg[1].src;
        }
        smallImg[2].onclick = function(){
            MainImg.src = smallImg[2].src;
        }
        smallImg[3].onclick = function(){
            MainImg.src = smallImg[3].src;
        } */