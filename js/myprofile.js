function cargarMiPerfilPersonal(){
   let main = document.getElementById("main")
   main.innerHTML = 
   '<!--body de la pagina de Mi Perfil-->'+
    '<br>'+
    
    '<div class="container" id="fullcontainer">'+


        '<div class="row shadow-lg  rowdemyprofile">'+
            '<div class="col-sm-3  offset-3">'+
                '<img class="img-fluid" src="../assets/img/pezcurioso.jpg" alt="fotodeusuario"  id="logomyprofile">'+
            '</div>'+
            '<div class="col-sm-4">'+
                '<h2 id="nombreUsuarioProfile" class="textitosEncabezado">DonPrimitivo1990</h2>'+
              
            '</div>'+
            
        '</div>'+

        '<div class="row rowdemyprofile">'+
            '<div class="col-sm">'+
                '<h5 id="mensajeBienvenida">¡Es un gusto verte de nuevo!💜</h5>'+
            '</div>'+
        '</div>'+
        '<div class="row rowdemyprofile">'+
            '<div class="col-sm" align="center">'+
                '<button class="btn btn-primary botonsitosOpciones"> 💳Formas de pago </button>'+
            '</div>'+
        '</div>'+
        '<div class="row rowdemyprofile">'+
            '<div class="col-sm" align="center">'+
                '<button class="btn btn-primary botonsitosOpciones">📦Historial de pedidos</button>'+
            '</div>'+
        '</div>'+
        '<div class="row">'+
            '<div class="col-sm" align="center">'+
                '<button class="btn btn-primary botonsitosOpciones">⚙Configuración</button>'+
            '</div>'+

        '</div>'+



    '</div>'
}