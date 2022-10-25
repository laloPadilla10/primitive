function cargarAboutUs () {
    let main = document.getElementById("main");
    main.innerHTML =  '<br>'+
    '<div class="row">'+
        '<div class="col-md-6 align-self-center">'+
            '<div class="row">'+
                '<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">'+
                    '<div class="carousel-indicators">'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"'+
                            'class="active" aria-current="true" aria-label="Slide 1"></button>'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"'+
                            'aria-label="Slide 2"></button>'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"'+
                            'aria-label="Slide 3"></button>'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"'+
                            'aria-label="Slide 4"></button>'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"'+
                            'aria-label="Slide 5"></button>'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"'+
                            'aria-label="Slide 6"></button>'+
                        '<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"'+
                            'aria-label="Slide 7"></button>'+
                    '</div>'+
                    '<div class="carousel-inner">'+
                        '<!-- row justify-content-center my-4 -->'+
                        '<div class="carousel-item active ">'+
                            '<!-- col-md-6 -->'+
                            '<img src="https://i.ibb.co/gThBjBm/Eduardo-Mendoza.jpg" width="50" alt=".."'+
                                'class="d-block w-100">'+
                            '<!-- style="width:360px;height:640px" -->'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Eduardo Mendoza</h5>'+
                                '<p class="slideshow">CEO y Fundador</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="carousel-item">'+
                            '<img src="https://i.ibb.co/jk3WTx1/Allan-spagna.jpg" class="d-block w-100" alt="...">'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Alan España</h5>'+
                                '<p class="slideshow">???</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="carousel-item">'+
                            '<img src="https://i.ibb.co/dcPcXvB/Lupita.jpg" class="d-block w-100" alt="...">'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Lupita Lopez</h5>'+
                                '<p class="slideshow">QA Analys</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="carousel-item">'+
                            '<img src="https://i.ibb.co/kXq4qL4/Cybermaggi.jpg" class="d-block w-100" alt="...">'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Maggie Villaseñor</h5>'+
                                '<p class="slideshow">Cyber Seguridad</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="carousel-item">'+
                            '<img src="https://i.ibb.co/FxMYV3X/Anahi.jpg" class="d-block w-100" alt="...">'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Anahí Parrilla</h5>'+
                                '<p class="slideshow">UX</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="carousel-item">'+
                            '<img src="https://i.ibb.co/rHbhzKx/Arturo.jpg" class="d-block w-100" alt="...">'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Arturo G</h5>'+
                                '<p class="slideshow">IT</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="carousel-item">'+
                            '<img src="https://i.ibb.co/rcdbw4s/Lalo-Padilla.jpg" class="d-block w-100" alt="...">'+
                            '<div class="carousel-caption d-none d-md-block">'+
                                '<h5 class="slideshow">Lalo Padilla</h5>'+
                                '<p class="slideshow">Tech Lead</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"'+
                        'data-bs-slide="prev">'+
                        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                        '<span class="visually-hidden">Previous</span>'+
                    '</button>'+
                    '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"'+
                        'data-bs-slide="next">'+
                        '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                        '<span class="visually-hidden">Next</span>'+
                    '</button>'+
                '</div>'+
            '</div>'+
           '<!-- <div class="col-md-2"></div> -->'+
        '</div>'+
        '<!-- <div class="col-md-1"></div> -->'+
        '<div class="col-md-5">'+
            '<h1 class="about text-center">About us</h1>'+
            '<p class="p"><span class="color-p">Geekmitive</span> nació con el propósito de ser proveedor de productos'+
                ' Geek más confiable del país (y del continente entero). Entendemos tus inquietudes al comprar online, sin embargo,'+
                ' aseguramos total transparencia en todos los procesos de tu compra, desde la selección, checkout, hasta el' +
                ' rastreo de tu envío seguro. Ofrecemos una amplia variedad de productos del mundo geek que tanto te gustan. </p>'+
            '<p class="p">¡OJO! No solo contamos con los productos de las marcas más populares del mercado, si eres'+
                ' fan del mundo underground en lo geek ¡es muy posible que encuentres lo que buscas aquí!</p>'+
            '<p class="p">Y hablando de transparencia… comencemos por transparentar a todo el equipo detrás de'+
                'Geekmitive <span class="color-p">¡UGA UGA!</span></p>'+
            '<div class="d-md-block">'+
                '<img class="img-fluid mx-auto d-block" id="img-icon" src="../assets/img/monito.png"'+
                    'alt="imagen-login">'+
            '</div>'+
        '</div>'+
       '<!--  <div class="col-md-1"></div> -->'+
        '<br>'+
        '<div class="col-md-3"></div>'+
        '<hr>'+
        '<br />';

}