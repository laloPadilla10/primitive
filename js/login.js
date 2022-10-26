function cargarLogin () {
    let main = document.getElementById("main");
    main.innerHTML =  
    '<!-- Login-->' +
    '<div class="container-fluid" id="login">' +
        '<!-- Cuerpo de Login-->' +
        '<div class="row">' +
            '<!-- Imagen -->' +
            '<div class="col d-none d-md-flex align-items-center">' +
                '<img id="imagen-login" class="img-fluid mx-auto d-block" src="../assets/img/goku.jpg" alt="imagen-login">' +
            '</div>' +
            '<!-- Login -->' +
            '<div class="col my-5">' +
                '<form>' +
                    '<h2 class="text-center">Log in զ( ›  ͜ ‹  )ჳ</h2>' +
                    '<!-- Email/ username log in -->' +
                    '<div class="row justify-content-center form-outline mb-4 my-5">' +
                        '<div class="col-8">' +
                            '<input type="email" style="background-color:rgb(177, 225, 225);" id="email-login" class="form-control text-center" placeholder="email / username" required/>' +
                        '</div>' +
                    '</div>' +
                  
                    '<!-- Password input -->' +
                    '<div class="row justify-content-center form-outline mb-4">' +
                        '<div class="col-8">' +
                            '<input type="password" style="background-color:rgb(177, 225, 225);" id="password-login" class="form-control text-center" placeholder="password" required/>' +
                        '</div>' +
                    '</div>' +
                  
                    '<!-- Checkbox Remember me -->' +
                    '<div class="row mb-4">' +
                      '<div class="col d-flex justify-content-center">' +
                        '<div class="form-check">' +
                          '<input class="form-check-input" type="checkbox" value="" id="checkbox-input" checked />' +
                          '<label class="form-check-label" for="checkbox-input"> Remember me </label>' +
                        '</div>' +
                      '</div>' +
                    '</div>' +

                    '<!-- Forgot password link -->' +
                    '<div class="row mb-4">' +
                        '<div class="col d-flex justify-content-center">' +
                            '<a href="#!">Forgot password?</a>' +
                        '</div>' +
                    '</div> ' +                      
                    '<!-- Log in button -->' +
                    '<div class="row mb-4">' +
                        '<div class="col d-flex justify-content-center">' +
                            '<button id="button-login" type="button" class="btn btn-primary btn-block mb-4">LOG IN</button>' +
                        '</div>' +
                    '</div>' +
                    
                    '<div class="text-center">' +
                        '<p>Have you not registered yet?</p>' +
                        '<p>Sign up <a href="#" onClick="signUp()">here</a></p>' +
                       '<br>' +
                      '<p>or sign up with:</p>' +
                      '<button type="button" class="btn btn-primary btn-floating mx-1">' +
                        '<i class="fab fa-facebook-f fa-2x"></i>' +
                      '</button>' +
                  
                      '<button type="button" class="btn btn-danger btn-floating mx-1">' +
                        '<i class="fab fa-reddit fa-2x"></i>' +
                      '</button>' +
                  
                      '<button type="button" class="btn btn-link btn-floating mx-1">' +
                        '<i class="fab fa-twitter fa-2x"></i>' +
                      '</button>' +
                  
                      '<button type="button" class="btn btn-dark btn-floating mx-1">' +
                        '<i class="fab fa-instagram fa-2x"></i>' +
                      '</button>' +
                    '</div>' +
                  '</form>' +
            '</div>' +
        '</div>' +
    '</div>' +
'<br>;'

}