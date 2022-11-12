package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "marcas")
@Entity
public class Marcas {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
      
	  @Column(name="id_marca")
	  private Long id_marca;
	
	  private String nombre;

	public Long getId_marca() {
		return id_marca;
	}

	public void setId_marca(Long id_marca) {
		this.id_marca = id_marca;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	  
	  
	  
}
