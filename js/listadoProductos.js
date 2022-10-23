function addItem(item) {
  const itemHTML =
    `<div class="col-md-4 col-sm-6 col-xs-12" id="card" style=" padding-bottom:20px;" >
      <div class="card h-100" >
        <div class="card-header">
          <img class="card-img" src="${item.img}" alt="${item.name}" style="height: 322px;">
          <div class="card-img-overlay  justify-content-end">
          <a href="#" class="card-link text-danger like">
          <i class="fas fa-heart"></i>
          </a>
          </div>
        </div>
        <div class="card-body">
          <h4 class="card-title">${item.name}</h4>
          <p class="card-text">${item.description}</p>
        </div>
        <div class=" card-footer buy d-flex justify-content-between align-items-center">
          <div class="price text-"><h5 class="mt-4">$125</h5></div>
          <a href="#" class="btn btn-danger"><i class="fas fa-shopping-cart"></i></a>
        </div>
      </div>
    </div> `;

  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

addItem({
  name: "Camiseta Cobra Kai",
  img: "https://i.ibb.co/Qf3JqnS/Cobra-Kai-Strike-First-Unisex-T-Shirt.jpg",
  description:
    "Una camiseta Cobra Kai cómoda con mangas cortas y cuello redondo. ¡Perfecto para usar mientras viaja o descansando adentro!",
});

addItem({
  name: "Camiseta unisex Maestro Roshi de Dragon Ball",
  img: "https://i.ibb.co/yVsRYw8/maestro-Roshi.jpg",
  description: "Producto con licencia oficial de Dragon Ball.",
});

addItem({
  name: "Sudadera con gorro Gamer unisex",
  img: "https://i.ibb.co/mrKs152/Game-Stop-Gamer-Unisex-Hooded-Sweatshirt.jpg",
  description: "Una sudadera con gorro que ofrece comodidad y calidad premium",
});

addItem({
  name: "Sudadera con gorro StarWars unisex",
  img: "https://i.ibb.co/WGgyL5F/categoria-ropa-opcion-2.png",
  description: "Una sudadera con gorro que ofrece comodidad y calidad premium",
});

addItem({
  name: "Batman: The Killing Joke Deluxe",
  img: "https://i.ibb.co/HTjBY7m/batman-the-killing-joke-deluxe.jpg",
  description:
    "En Batman: The Killing Joke, The Joker, toma el origen del mayor supervillano de los cómics y cambia el mundo de Batman para siempre.",
});

addItem({
  name: "Tamagotchi R2-D2",
  img: "https://i.ibb.co/w4nHyXW/starwars-Tamagotchi.webp",
  description: "Cuida de R2-D2 manteniéndolo cargado, limpio y jugando con él.",
});

addItem({
  name: "Nintendo Switch Lite Console Coral",
  img: "https://i.ibb.co/Xjr9nPh/Nintendo-Switch-Lite-Console-Coral.jpg",
  description:
    "Presentamos Nintendo Switch™ Lite, una nueva versión del sistema Nintendo Switch que está optimizada para el juego portátil personal.",
});

addItem({
  name: "Figura oficial de Sideshow Collectibles Star Wars C-3PO escala 1:6",
  img: "https://i.ibb.co/ZcPzjw4/c3po-figure.png",
  description:
    "La figura de C-3PO a escala de 6 pulgadas se detalla para parecerse al personaje de la pelicula Star Wars, con detalles de primera calidad y múltiples puntos de articulación.",
});

addItem({
  name: 'Figura Oficial Furyu Hatsune Miku Cat Auriculares Versión 1/7 25cm (9.8")',
  img: "https://i.ibb.co/Vmqh6C6/heo-hm-cehf11-1024x1024.webp",
  description: "Producto con licencia oficial de Hatsune Miku. ",
});

addItem({
  name: "Robotech®: El juego de rol de Macross Saga",
  img: "https://i.ibb.co/R0R8Ggz/Robotech-3-D-Blank-Book-Cover-3.jpg",
  description:
    "Robotech: Macross Saga consta de 264 páginas de asombrosa calidad artística. Los fanáticos de Robotech no se sentirán decepcionados.",
});