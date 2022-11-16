-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema geekmitive
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema geekmitive
-- -----------------------------------------------------

USE `geekmitive` ;

-- -----------------------------------------------------
-- Table `geekmitive`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(255) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `id_UNIQUE` (`id_usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekmitive`.`marcas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`marcas` (
  `id_marca` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id_marca`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekmitive`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekmitive`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `id_marca` INT NOT NULL,
  `id_categoria` INT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` DOUBLE(5,2) UNSIGNED NOT NULL,
  `descuento` DOUBLE(2,2) NOT NULL,
  `descripcion` VARCHAR(250) NULL,
  `cantidad` INT UNSIGNED NOT NULL,
  `talla` CHAR(1) NOT NULL,
  `imagen` BLOB NOT NULL,
  `nacional` TINYINT NOT NULL,
  `marcas_id_marca` INT NOT NULL,
  `nuevo` TINYINT NULL,
  `productocol` VARCHAR(45) NULL,
  `categoria_id_categoria` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `marcas_id_marca`, `categoria_id_categoria`),
  INDEX `fk_producto_marcas1_idx` (`marcas_id_marca` ASC) VISIBLE,
  INDEX `fk_producto_categoria1_idx` (`categoria_id_categoria` ASC) VISIBLE,
  CONSTRAINT `fk_producto_marcas1`
    FOREIGN KEY (`marcas_id_marca`)
    REFERENCES `geekmitive`.`marcas` (`id_marca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_id_categoria`)
    REFERENCES `geekmitive`.`categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekmitive`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`carrito` (
  `id_carrito` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_carrito`, `usuario_id_usuario`),
  INDEX `fk_carrito_usuario_idx` (`usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_usuario`
    FOREIGN KEY (`usuario_id_usuario`)
    REFERENCES `geekmitive`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekmitive`.`usuario_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`usuario_pedidos` (
  `id_usuario_pedido` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cant_productos` VARCHAR(45) NULL,
  `carrito_id_carrito` INT NOT NULL,
  `carrito_usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_usuario_pedido`, `carrito_id_carrito`, `carrito_usuario_id_usuario`),
  INDEX `fk_usuario_pedidos_carrito1_idx` (`carrito_id_carrito` ASC, `carrito_usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_pedidos_carrito1`
    FOREIGN KEY (`carrito_id_carrito` , `carrito_usuario_id_usuario`)
    REFERENCES `geekmitive`.`carrito` (`id_carrito` , `usuario_id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `geekmitive`.`usuario_pedidos_has_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `geekmitive`.`usuario_pedidos_has_producto` (
  `usuario_pedidos_id_usuario_pedido` INT NOT NULL,
  `usuario_pedidos_carrito_id_carrito` INT NOT NULL,
  `usuario_pedidos_carrito_usuario_id_usuario` INT NOT NULL,
  `producto_id_producto` INT NOT NULL,
  PRIMARY KEY (`usuario_pedidos_id_usuario_pedido`, `usuario_pedidos_carrito_id_carrito`, `usuario_pedidos_carrito_usuario_id_usuario`, `producto_id_producto`),
  INDEX `fk_usuario_pedidos_has_producto_producto1_idx` (`producto_id_producto` ASC) VISIBLE,
  INDEX `fk_usuario_pedidos_has_producto_usuario_pedidos1_idx` (`usuario_pedidos_id_usuario_pedido` ASC, `usuario_pedidos_carrito_id_carrito` ASC, `usuario_pedidos_carrito_usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_pedidos_has_producto_usuario_pedidos1`
    FOREIGN KEY (`usuario_pedidos_id_usuario_pedido` , `usuario_pedidos_carrito_id_carrito` , `usuario_pedidos_carrito_usuario_id_usuario`)
    REFERENCES `geekmitive`.`usuario_pedidos` (`id_usuario_pedido` , `carrito_id_carrito` , `carrito_usuario_id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_pedidos_has_producto_producto1`
    FOREIGN KEY (`producto_id_producto`)
    REFERENCES `geekmitive`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
