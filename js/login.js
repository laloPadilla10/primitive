const url ="../assets/json/login-users.json";

//const url ="https://reqres.in/api/users?delay=2";

//Verificar si ya existe LocalStorage:
//Se activa funcion Fetch para conseguir datos
function getUsers(){
    const localData = JSON.parse(localStorage.getItem("users"));
    if (localData && localData.time > Date.now()){
        validUsers(localData.dates);
    }
    else solicitudFetch();
}

//Solicitud Fetch
function solicitudFetch(){
    fetch(url)
    .then(response => (response.json()))
    .then(conversion => {
        saveLocalStorage(conversion.users)
        validUsers(conversion.users);
    })
    .catch(error => {
            console.log(error);
    })
    
}

function saveLocalStorage(data){
    const users ={
        time: Date.now() + 60000,
        dates: data
    }
    localStorage.setItem("users",JSON.stringify(users));
}

let times = 0;
let user;
let password;

function validUsers(data){
    
    user = document.getElementById("user-login");
    password = document.getElementById("password-login");
    
    if (times >= 2){
        Swal.fire({
            icon: 'error',
            title: 'Que mal!...',
            text: '¿Aún no tienes una cuenta con nosotros?',
            footer: '<a href="../html/signup.html">Registrate</a>'
          })
        return;
    }
    
    if ((user.value == "") || (password.value == "")) {
        Swal.fire("Ingresa todos los campos requeridos");
        
        user.classList.add("border-danger");
        password.classList.add("border-danger");
        document.getElementById("errorUser").style.display = "block";
        document.getElementById("errorPass").style.display = "block";
        return false;
    
    }if ( (compareUsers(data) == false) && (comparePass(data) == false)){
        Swal.fire("Verifica los datos ingresados")
        
        user.classList.add("border-danger");
        password.classList.add("border-danger");
        document.getElementById("errorUser").style.display = "block";
        document.getElementById("errorPass").style.display = "block";
        times++    
        return false;

    } else if ( compareUsers(data) == false ){
        Swal.fire("Usuario o email incorrecto. Verifica nuevamente");
        
        user.classList.add("border-danger");
        document.getElementById("errorUser").style.display = "block";
        return false;

    } else if ( comparePass(data) == false){
        Swal.fire("Contraseña incorrecta. Verifica nuevamente")
        
        password.classList.add("border-danger");
        document.getElementById("errorPass").style.display = "block";
        return false;

    } else
        //document.location.assign("../index.html")
        cargarMiPerfilPersonal()
        return true;
}

function compareUsers(data){
    for(i = 0; i < data.length; i++){
        if ((data[i].user == user.value) || (data[i].email == user.value)){
            return true;
        }  
}
    return false;
}

function comparePass(data){
    for(i = 0; i < data.length; i++){
        if ( data[i].password == password.value) {
            return true;
        }  
}
    return false;
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function cargarLogin () {
    let main = document.getElementById("main");
    main.innerHTML =  
    '<!-- Login-->' +
    '<div class="container-fluid" id="login">' +
        '<!-- Cuerpo de Login-->' +
        '<div class="row">' +
            '<!-- Imagen -->' +
            '<div class="col d-none d-md-flex align-items-center">' +
                '<img id="imagen-login" class="img-fluid mx-auto d-block" src="../assets/img/singin2.jpg" alt="imagen-login" style="height: 1000px">' +
            '</div>' +
            '<!-- Login -->' +
            '<div class="col my-5">' +
                '<form>' +
                    '<h2 class="text-center">¡Bienvenido!</h2>' +
                    '<!-- Email/ username log in -->' +
                    '<div class="row justify-content-center form-outline mb-4 my-5">' +
                        '<div class="col-8">' +
                            '<input type="email" style="background-color:rgb(177, 225, 225);" id="user-login" class="form-control text-center" placeholder="email / username" required/>' +
                            '<label class="text-danger" id = "errorUser" style="display: none;">*información invalida</label>'+
                        '</div>' +
                    '</div>' +
                  
                    '<!-- Password input -->' +
                    '<div class="row justify-content-center form-outline mb-4">' +
                        '<div class="col-8">' +
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
                            '<button id="button-login" type="button" class="btn-login" onclick="getUsers()">Ingresar</button>'+
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