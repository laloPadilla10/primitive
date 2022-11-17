let arregloCarrito = [];
let categorias = [];

const urlFetchCategorias = new URL("http://localhost:8080/geekmitive/categorias/getAll")

fetch(urlFetchCategorias)
    .then(response => response.json())
    .then(data => {
      categorias = data;
      categorias.forEach(c => {
        $("#listaCategorias").append (`<li>
            <a href="#" class="dropdown-item" onclick="cargarProductos('${c.nombre}')">${c.nombre}</a>
          </li>`)
      });
    })
    .catch(err => console.log(err));
  
function cargarProductos(filtro) {
  let main = document.getElementById("main");
  main.innerHTML =`<section class="container mx-auto mt-4" id="section">
    <div class="row card-group" id="list-items"></div>
    </section>
    <br/>`;

  arrayProductos.filter(i=> i.idCategoria.nombre === filtro).forEach((i)=>{
    addItem(i);
  });

  let elementos = document.getElementsByClassName("imagenProducto");
  for(let e of elementos){
    e.addEventListener("click", function (){
      verDetalle(arrayProductos.filter(a=> a.imagen===e.attributes["src"].value)[0])});
  }
}

function addItem(item) {
  const itemHTML =
    `<div class="col-md-4 col-sm-6 col-xs-12" id="card" style=" padding-bottom:20px;">
      <div class="card h-100">
        <div class="card-header">
            <img class="card-img imagenProducto" src="${item.imagen}" alt="${item.nombre}" style="height: 322px;">
        </div>
        <div class="card-body">
          <h4 class="card-title">${item.nombre}</h4>
          <p class="card-text">${item.descripcion}</p>
        </div>
        <div class="card-footer buy d-flex justify-content-between align-items-center"
          <div class="price text-"><h5 class="mt-4">$${item.precio} MXN</h5></div>
          
        </div>
      </div>
    </div>`;

  document.getElementById("list-items").innerHTML += itemHTML;
}
