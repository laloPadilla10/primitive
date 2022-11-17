
function guardarLocalStorage(data){
    localStorage.setItem("user", JSON.stringify({time: Date.now() + 60000, usuario: data}));
}

let times = 0;

function validUser(data){
    
    let user = $("#user-login").val();
    let password = $("#password-login").val();
    
    if (times >= 2){
        Swal.fire({
            icon: 'error',
            title: 'Que mal!...',
            text: '¿Aún no tienes una cuenta con nosotros?',
            footer: '<a href="../html/signup.html">Registrate</a>'
          })
        return;
    }
    
    if ((user == "") || (password == "")) {
        Swal.fire("Ingresa todos los campos requeridos");
        
        $("#user-login").addClass("border-danger");
        $("#password-login").addClass("border-danger");
        document.getElementById("errorUser").style.display = "block";
        document.getElementById("errorPass").style.display = "block";
        return false;
    }

    fetch(`http://localhost:8080/geekmitive/usuarios/getByNickPass?nickName=${user}&password=${password}`)
    .then(response => {
        if(response.ok)
            return response.json();
        else
            throw new Error('Something went wrong.');
    }).then(u => {
        guardarLocalStorage(u);
        cargarMiPerfilPersonal(u.nickname);
    }).catch(error => {
        Swal.fire("Usuario o email incorrecto. Verifica nuevamente");
        $("#user-login").addClass("border-danger");
        $("#password-login").addClass("border-danger");
        document.getElementById("errorUser").style.display = "block";
        document.getElementById("errorPass").style.display = "block";
        console.error(error);
        times++;
    });    
    
    return true;
}

function cargarLogin () {
    if (localStorage.getItem("user")) return;
    let main = document.getElementById("main");
    main.innerHTML =  
    '<!-- Login-->' +
    '<div class="container-fluid" id="login">' +
        '<!-- Cuerpo de Login-->' +
        '<div class="row justify-content-center" style="margin-top:20px">' +
            '<!-- Imagen -->' +
            '<div class="col-sm-4 d-none d-md-flex align-items-center">' +
                '<img class="img-thumbnail" id="imagen-login" class="img-fluid mx-auto d-block" src="../assets/img/singin2.jpg" alt="imagen-login" style="height: 700px">' +
            '</div>' +
            '<!-- Login -->' +
            '<div class="col-sm-4">' +
                '<form class="row g-3" >' +
                    '<h2 class="text-center">¡Bienvenido!</h2>' +
                    '<!-- Email/ username log in -->' +
                    '<div class="row justify-content-center form-outline mb-4 my-5">' +
                        '<div class="col-sm-12">' +
                            '<input type="email" style="background-color:rgb(177, 225, 225);" id="user-login" class="form-control text-center" placeholder="email / username" required/>' +
                            '<label class="text-danger" id = "errorUser" style="display: none;">*información invalida</label>'+
                        '</div>' +
                    '</div>' +
                  
                    '<!-- Password input -->' +
                    '<div class="row justify-content-center form-outline mb-4">' +
                        '<div class="col-12">' +
                            '<input type="password" style="background-color:rgb(177, 225, 225);" id="password-login" class="form-control text-center" placeholder="password" required/>' +
                            '<label class="text-danger" id = "errorPass" style="display: none;">*información invalida</label>'+
                        '</div>' +
                    '</div>' +
                  
                    '<!-- Checkbox Remember me -->' +
                    '<div class="row mb-4">' +
                      '<div class="col d-flex justify-content-center">' +
                        '<div class="form-check">' +
                          '<input class="form-check-input" type="checkbox" value="" id="checkbox-input" checked />' +
                          '<label class="form-check-label" for="checkbox-input" id="checkbox">Recuérdame</label>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<!-- Log in button -->'+
                    '<div class="row mb-2">'+
                        '<div class="col d-flex justify-content-center">'+
                          '<form > <!--method="post"-->'+
                            '<button id="button-login" type="button" class="btn-login" onclick="validUser()">Ingresar</button>'+
                          '</form>'+
                        '</div>'+
                    '</div>'+

                    '<!-- Forgot password link -->' +
                    '<div class="row mb-4">' +
                        '<div class="col d-flex justify-content-center">' +
                            '<a href="#!">Olvidé mi contraseña</a>' +
                        '</div>' +
                    '</div> ' +                      
                    '<!-- Log in button -->' +
                    '<div class="text-center">'+
                
                    '<p>o ingresa con:</p>'+
                    '<button type="button" class="btn btn-floating mx-1">'+
                      '<i class="fa-brands fa-facebook"></i>'+
                    '</button>'+
                
                    '<button type="button" class="btn btn-floating mx-1">'+
                      '<i class="fa-brands fa-reddit-alien"></i>'+
                    '</button>'+
                
                    '<button type="button" class="btn btn-floating mx-1">'+
                      '<i class="fa-brands fa-twitter"></i>'+
                    '</button>'+
                
                    '<button type="button" class="btn btn-floating mx-1">'+
                      '<i class="fa-brands fa-instagram"></i>'+
                    '</button>'+
                    '<br>'+
                    '<br>'+

                    '<p>¿Aún no eres miembro?</p>'+
                    '<p class="p1">Regístrate <a href="#" onclick="signUp()" >aquí</a></p>'+
                  '</div>'+
                  '</form>' +
            '</div>' +
        '</div>' +
    '</div>' +
'<br>;'

}