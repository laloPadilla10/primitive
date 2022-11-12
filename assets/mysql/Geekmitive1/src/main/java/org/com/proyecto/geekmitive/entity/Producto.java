package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "producto")
@Entity
public class Producto {
	
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 
	 @Column(name="id_producto")
	 private Long id_producto;

     @ManyToOne
 	 @JoinColumn(name="id_marca")
	 private Marcas id_marca;
     
 	 @ManyToOne
 	 @JoinColumn(name="id_categoria")
	 private Categoria id_categoria;
	 
	 private String nombre;
	 
	 private Double precio;
	 
	 private String descripcion;
	 
	 private Integer stock;
	 
	 private String imagen;
	 
	 private Boolean nacional;
	 
	 private Boolean nuevo;

	public Long getId_producto() {
		return id_producto;
	}

	public void setId_producto(Long id_producto) {
		this.id_producto = id_producto;
	}

	public Marcas getId_marca() {
		return id_marca;
	}

	public void setId_marca(Marcas id_marca) {
		this.id_marca = id_marca;
	}

	public Categoria getId_categoria() {
		return id_categoria;
	}

	public void setId_categoria(Categoria id_categoria) {
		this.id_categoria = id_categoria;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public Boolean getNacional() {
		return nacional;
	}

	public void setNacional(Boolean nacional) {
		this.nacional = nacional;
	}

	public Boolean getNuevo() {
		return nuevo;
	}

	public void setNuevo(Boolean nuevo) {
		this.nuevo = nuevo;
	}

		 
	 

}

