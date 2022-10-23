const validarEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  
  let nombre, email, telefono, mensaje;

  function enviarEmail(e) {
  
    nombre = document.getElementById("nombre");
    email = document.getElementById("email");
    telefono = document.getElementById("telefono");
    mensaje = document.getElementById("mensaje");
    e.preventDefault();
    
    if (validarForm()){ 
        Swal.fire({
            icon: 'success',
            title: 'El correo ha sido enviado',
            showConfirmButton: false
          })
    }
    
  }

  function validarForm (){  

    // Validacion de todos los inputs
    if (nombre.value === ""){
        nombre.classList.add("border-danger");
        document.getElementById("errorNombre").style.display = "block";
        return false;
    } else if (nombre.classList.contains("border-danger")){
        nombre.classList.remove("border-danger");
        document.getElementById("errorNombre").style.display = "none";
    }
    if (email.value === "" || !validarEmail(email.value)){
        email.classList.add("border-danger");
        document.getElementById("errorEmail").style.display = "block";
        return false;
    } else if (email.classList.contains("border-danger")){
        email.classList.remove("border-danger");
        document.getElementById("errorEmail").style.display = "none";
    }
    if(telefono.value === "" ){
        email.classList.add("border-danger");
        document.getElementById("errorTelefono").style.display = "block";
        return false;
    }else if (telefono.classList.contains("border-danger")){
        telefono.classList.remove("border-danger");
        document.getElementById("errorTelefono").style.display = "none";
    }
    if (mensaje.value === ""){
        email.classList.add("border-danger");
        document.getElementById("errorMensaje").style.display = "block";
        return false;           
    }else if (mensaje.classList.contains("border-danger")){
        mensaje.classList.remove("border-danger");
        document.getElementById("errorMensaje").style.display = "none";

    }
    return true;
  }

  function cargarContacto () {
    let main = document.getElementById("main");
    main.innerHTML = crearPaginaContacto();
  }

  function crearPaginaContacto (){
    return '<div class="col-sm-8 offset-sm-2"  style="margin-top:30px">'+
                '<div class="row">' +
                    '<h1 class="title">Contáctanos<hr></h1>'+
                '</div>'+
            '</div>'+
            '<div class="col-sm-12" style="margin-top:10px">' +
                '<div class="row justify-content-center">' +
                    '<div class="col-sm-4">' +                                            
                        '<img class="img-thumbnail" src="https://i.ibb.co/xYVBsyf/Sign-in-opcion-6.jpg" alt="imagen" style="height: 700px">' +
                    '</div>' +
                    '<div class="col-sm-4">' +
                        '<p style="text-align: center;">Agradecemos el interés en nosotros. Si desea recibir mayor ' +
                            'información sobre alguno de nuestros productos, por favor rellene el siguiente formulario. ' +
                            'Estamos listos para atender sus dudas y solicitudes.' +
                        '</p>'+
                        '<form class="row g-3" id="registro">' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputNombre" class="form-label"><strong>Nombre</strong></label>' +
                                    '<input type="text" class="form-control" id="nombre" style="background-color:rgb(221 231 245);">' +
                                    '<label class="text-danger" style="display: none" id="errorNombre">*campo requerido</label>' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputemail" class="form-label"><strong>e-mail</strong></label>' +
                                    '<input type="email" class="form-control" id="email" style="background-color:rgb(221 231 245);">' +
                                    '<label class="text-danger" style="display: none" id="errorEmail">*campo requerido/formato inválido</label> ' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputTelefono" class="form-label"><strong>Teléfono</strong></label>' +
                                    '<input type="number" class="form-control" id="telefono" style="background-color:rgb(221 231 245);">' +
                                    '<label class="text-danger" style="display: none" id="errorTelefono">*campo requerido</label>' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputMensaje" class="form-label"><strong>Mensaje</strong></label>' +
                                    '<textarea class="form-control" id="mensaje" rows="5" style="background-color:rgb(221 231 245);"></textarea>' +
                                    '<label class="text-danger" style="display: none" id="errorMensaje">*campo requerido</label>' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<form method="post">' +
                                    '<button onclick="enviarEmail(event)" type="submit" class="btn btn-primary">Enviar</button></form>' +
                            '</div>' +
                        '</form>' +
                    '</div>' +
                '</div>' +
            '</div>';
  }
