USE `geekmitive`;

INSERT INTO `geekmitive`.`carrito` (id_carrito, id_usuario, usuario_id_usuario) VALUES();
SELECT * FROM `carrito`;

INSERT INTO `geekmitive`.`categoria` (nombre) VALUES 
('ropa'), 
('gadgets'), 
('accesorios'), 
('nacionales'),
('comics/mangas'),
('figuras');   

SELECT * FROM `geekmitive`.`categoria`;

INSERT INTO `geekmitive`.`marcas` (nombre) VALUES 
('marvel'), 
('starwars'), 
('nintendo'), 
('disney'),
('crunchyroll'),
('bandai');

SELECT * FROM `geekmitive`.`marcas`;   

INSERT INTO `geekmitive`.`producto` (nombre, precio, descripcion, cantidad, talla, 
imagen, nacional, marcas_id_marca, nuevo, categoria_id_categoria, stock) VALUES
('gorra kirby', 399.00, 'Diseño personalizado: una imagen bordada de Kirby durmiendo decora este 
sombrero mientras que un par de burbujas flota sobre él. A los fanáticos del personaje de videojuegos 
les encantará el diseño bordado en este sombrero de contraste', 3, 'M', 'https://i.ibb.co/K7xqpRN/1.jpg', 0, 3, 1, 3, 10);

INSERT INTO `geekmitive`.`producto` (nombre, precio, descripcion, cantidad, talla, 
imagen, nacional, marcas_id_marca, nuevo, categoria_id_categoria, stock) VALUES 
('cartera mulan', 600.00, 'portafolios con cierre alrededor de mulan','1','M','https://i.ibb.co/B2gJBT7/Cartera-Mulan-Disney.jpg', 0, 4, 1, 3,20);

INSERT INTO `geekmitive`.`producto` (nombre, precio, descripcion, cantidad,
imagen, nacional, marcas_id_marca, nuevo, categoria_id_categoria, stock) VALUES 
('Cómic The Superior Spider-Man', 349.00, 'Después de años de ser derrotado a manos del trepamuros, OTTO OCTAVIUS ha conseguido lo impensable… 
¡PONER SU MENTE EN EL CUERPO DE PETER PARKER! Una asombrosa era terminó, ¡pero una nueva inicia para un inteligente y fuerte Superior Spider-Man!',
 1, 'https://i.ibb.co/stxGZtW/1.png', 0, 1, 1,5, 20);   

INSERT INTO `geekmitive`.`producto` (nombre, precio, descripcion, cantidad,
imagen, nacional, marcas_id_marca, nuevo, categoria_id_categoria, stock) VALUES 
('Mario Amiibo Super Smash Bros', 799.00, 'Obtén increíbles bonificaciones para los juegos con las figuras
 amiibo y juegos compatibles. Solo coloca un amiibo en el punto NFC de una consola compatible.',
 1, 'https://i.ibb.co/GpftCf2/1.jpg', 0, 3, 1, 6, 21);  
 
 INSERT INTO `geekmitive`.`producto` (nombre, precio, descripcion, cantidad,
imagen, nacional, marcas_id_marca, nuevo, categoria_id_categoria, stock) VALUES 
('Hoodie Stormtrooper', 649.00, 'Storm Trooper - chamarra con capucha, disfraz de cosplay para adultos, hombres y mujeres, 
traje de Halloween, sudadera blanca y negra.',
 1, 'https://i.ibb.co/0BQ0b37/1.png', 0, 2, 1, 1, 10);
 
INSERT INTO `geekmitive`.`producto` (nombre, precio, descripcion, cantidad,
imagen, nacional, marcas_id_marca, nuevo, categoria_id_categoria, stock) VALUES 
('Tostadora Darth Vader', 1699.00, 'Lleva a Vader a tu cocina: el icónico casco de Darth Vader es una tostador de trabajo detallada. 
Especificaciones del producto: chips de sonido Vader y luces en una secuencia de sonido de 10 segundos al tostar.',1 , 
'https://i.ibb.co/pjq5sNH/toaster.jpg', 0, 2, 1, 2, 4);
 
SELECT * FROM `geekmitive`.`producto`; 
SELECT * FROM `geekmitive`.`marcas`;
SELECT * FROM `geekmitive`.`categoria`; 


SELECT * FROM `geekmitive`.`usuario`;
INSERT INTO `geekmitive`.`usuario` (nickname, correo, contraseña, telefono) VALUES
('anahisinvida', 'parrilla2552@gmail,com', 'hola_123', 3339466307);

INSERT INTO `geekmitive`.`usuario` (nickname, correo, contraseña, telefono) VALUES
('lalo_padilla', 'lalo@gmail,com', 'contraseña_123', 6679466307);

INSERT INTO `geekmitive`.`usuario` (nickname, correo, contraseña, telefono) VALUES
('lupita_star', 'lupita@gmail,com', 'contraseña_1234', 5579466307);

INSERT INTO `geekmitive`.`usuario` (nickname, correo, contraseña, telefono) VALUES
('cybermaggi', 'maggi@gmail,com', 'contraseña_1224', 8879466307);

INSERT INTO `geekmitive`.`usuario` (nickname, correo, contraseña, telefono) VALUES
('artuto', 'arturo@gmail,com', 'contraseña_1225', 9979466307);

SELECT * FROM `geekmitive`.`usuario_pedidos`;

INSERT INTO `geekmitive`.`usuario` (nickname, correo, contraseña, telefono) VALUES
('artuto', 'arturo@gmail,com', 'contraseña_1225', 9979466307);



-- SET FOREIGN_KEY_CHECKS = 0;
-- TRUNCATE TABLE `producto`;
-- SET FOREIGN_KEY_CHECKS = 1;


-- ALTER TABLE `geekmitive` AUTO_INCREMENT=1;



