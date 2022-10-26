function validar(){

  
    /*form.<nombredelinput.propiedad
       - return false para terminar la ejecucion
        - focus para llevar el puntero al campo vacío despues de emitir la alerta corresp.
        - <si al final has ingresado todos los campos correctamente saldrá una alerta exitosa>
    */

    //validando nombre
    let form = document.form;
    if(form.nombre.value == 0){
        alert("El campo nombre está vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;

    }
    //validando telefono
    if(form.numtel.value==0){
        alert("el campo telefono está vacío");
        form.numtel.value="";
        form.numtel.focus();
        return false;
    }
    //validando mail
    if(form.email.value == 0){
        alert("el campo correo está vacío");
        form.email.value="";
        form.email.focus();
        return false;
    }

    //validando password
    if(form.password.value==0){
        alert("Ingresa una contraseña");
        form.password.value="";
        form.password.focus();
        return false;
    }
    alert("¡Te has registrado con éxito, Bienvenid@!");
    form.submit();
}

function signUp(){
    Swal.fire({
        width: 1200,
        html: '<div class="container w-75 mt-5 rounded">'+
        '<div class="row align-items-stretch">'+
            '<div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">'+
                '<!--d-none y d-lg-block son pa el responsive, none indica que no muestre la imagen cuando esté muy pequeña la ventana, lg block indica que si se muestre a partir de cierto tamaño-->'+

            '</div>'+
        '<div class="col p-5 rounded-end">'+
        '<div class="tex-end">'+
        
        '</div>'+
        '<h2 class="fw-bold text-center py-5">Registrate, es gratis💜</h2>'+
        
        '<!--inputs con sus labels y propiedades, cada uno en su div-->'+
        '<form name="form" action="#" method="post">'+
            '<div class="mb-4">'+
                '<label for="nombre" class="form-label">Nombre</label>'+
                '<input type="text" class="form-control" name="nombre" placeholder="xXxNarutoxXx " id="inputnombre2" required>'+
            '</div>'+
            '<div class="mb-4">'+
                '<label for="numtel" class="form-label">Numero telefónico</label>'+
                '<input type="number" class="form-control" name="numtel" placeholder="+529996663333" id="inputnum2" required>'+
            '</div>'+
            '<div class="mb-4">'+
                '<label for="email" class="form-label">Correo Electrónico</label>'+
                '<input type="email" class="form-control" name="email" placeholder="example@mail.com" id="inputmail2" required>'+
            '</div>'+
            '<div class="mb-4">'+
                '<label for="password" class="form-label">Contraseña</label>'+
                '<input type="password" class="form-control" name="password" placeholder="soygeekyque123" id="inputpass2" required>'+
            '</div>'+
        
            '<div class="d-grid">'+
                '<button type="submit" class="btn btn-primary" id="loginbtn2" onclick="validar()">Registrarse</button>'+
            '</div>'+
            '<div class="my-3">'+
                '<span>¿Ya tienes una cuenta? <a href="login.html">Ingresar</a></span><br>'+
                
            '</div>'+
        '</form>'+
    '</div>'+
    '</div>'+
    '</div>;'
    });
}