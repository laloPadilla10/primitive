// function validar(){

  
    /*form.<nombredelinput.propiedad
       - return false para terminar la ejecucion
        - focus para llevar el puntero al campo vacío despues de emitir la alerta corresp.
        - <si al final has ingresado todos los campos correctamente saldrá una alerta exitosa>
    */

    //validando nombre
/*     let form = document.form;
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
} */


const validarEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

let nombre, telefono, email, password;
function enviarEmail(e) {
    nombre = document.getElementById("nombre");
    telefono = document.getElementById("telefono");
    email = document.getElementById("email");
    password = document.getElementById("password");
    
    e.preventDefault();



//alert al hacer registro exitoso
    if (validarForm()){
        swal("¡Felicidades!", "Te has registrado con éxito.", "success");
        
        /* Swal.fire({
            icon: 'success',
            title: '¡Te has registrado con éxito!',
            showConfirmButton: false
        })  */
    }

}

function validarForm (){
    //validando cada input
    if(nombre.value === ""){
        nombre.classList.add("border-danger");
        document.getElementById("errorNombre").style.display = "block";
        return false;
    }else if (nombre.classList.contains("border-danger")){
        nombre.classList.remove("border-danger");
        document.getElementById("errorNombre").style.display = "none";
    }
    if(telefono.value === "" ){
        telefono.classList.add("border-danger");
        document.getElementById("errorTelefono").style.display = "block";
        return false;
    }else if (telefono.classList.contains("border-danger")){
        telefono.classList.remove("border-danger");
        document.getElementById("errorTelefono").style.display = "none";
    }
    if (email.value === "" || !validarEmail(email.value)){
        email.classList.add("border-danger");
        document.getElementById("errorEmail").style.display = "block";
        return false;
    } else if (email.classList.contains("border-danger")){
        email.classList.remove("border-danger");
        document.getElementById("errorEmail").style.display = "none";
    }
    if (password.value === ""){
        password.classList.add("border-danger");
        document.getElementById("errorPassword").style.display = "block";
        return false;           
    }else if (password.classList.contains("border-danger")){
        password.classList.remove("border-danger");
        document.getElementById("errorPassword").style.display = "none";

    }
    return true;

}

//JSON SECTION
let usuarios = [];
const addUsers = (ev)=>{
//ev(); //to stop the form submitting
ev.preventDefault();

let newUser = {
userName: document.getElementById('nombre').value,
number: document.getElementById('telefono').value,
UserEmail: document.getElementById('email').value,
UserPassword: document.getElementById('password').value
}
usuarios.push(newUser);
document.forms[0].reset(); //to clear for next entries 

//=======ESTO NO===============================================
//for display purposes only
/* console.warn('added' , {usuarios} );
let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(usuarios,
'\t', 2); */
//=============================================================

//saving to localstorage
localStorage.setItem('MyUsersList', JSON.stringify(usuarios));
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('loginbtn2').addEventListener('click', addUsers);
})  




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