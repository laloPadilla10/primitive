const validarEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  function enviarEmail(e) {
    e.preventDefault();
    if (validarForm()){ 
        Email.send({
            SecureToken : "175d7fc7-b888-40f5-a603-4663d16550d8",
            To : 'proyectoprimitive7@gmail.com',
            From : email.value,
            Subject : "This is the subject",
            Body : mensaje.value
        }).then(
          message => alert(message)
        );
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
