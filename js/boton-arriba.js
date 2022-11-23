/**
 * La funcion muestra la cantidad de pixeles desplazados hacia abajo desde el inicio del sito web
 */
function irArriba(pxPantalla){ 
    // Agregamos el evento scroll 
    window.addEventListener('scroll',()=>{
        var scroll= document.documentElement.scrollTop;
        //Para visualizar
        //console.log(scroll);
        //Guardar variable
        var botonArriba =document.getElementById('botonArriba');
        //Colocamos la condicion para aparecer el boton despues de una cantidad de pixeles desplazado

        if (scroll >pxPantalla) {
            botonArriba.style.right=20+"px";
        }else{
            botonArriba.style.right=-100+"px";
        }
    }
    )
}
irArriba(200);
//el valor de irArriba es dinamico