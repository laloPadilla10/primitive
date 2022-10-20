function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Paquete de 5 pares de calcetines tobilleros Pokemon Characters',
    'img':'https://i.ibb.co/QNmSckC/Pokemon-Character-Mix-and-Match-Ankle-Socks-5-Pack.jpg',
    'description':'Estos calcetines cuentan con una mezcla de poliéster y elastano para brindar flexibilidad y comodidad. '});

addItem({'name':'Camiseta Cobra Kai',
    'img':'https://i.ibb.co/Qf3JqnS/Cobra-Kai-Strike-First-Unisex-T-Shirt.jpg',
    'description':'Una camiseta Cobra Kai cómoda con mangas cortas y cuello redondo. ¡Perfecto para usar mientras viaja o descansando adentro!'})

addItem({'name':'Sudadera con gorro  Gamer unisex',
    'img':'https://i.ibb.co/mrKs152/Game-Stop-Gamer-Unisex-Hooded-Sweatshirt.jpg',
    'description':'Una sudadera con gorro que ofrece comodidad y calidad premium'})