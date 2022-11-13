package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "categoria")
@Entity
public class Categoria {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	  
	  @Column(name="id_categoria")
	  private Long id_categoria;
	 
	  private String nombre;

	public Long getId_categoria() {
		return id_categoria;
	}

	public void setId_categoria(Long id_categoria) {
		this.id_categoria = id_categoria;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	  
 

}
