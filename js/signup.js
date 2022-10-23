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