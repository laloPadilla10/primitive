package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "carrito")
@Entity
public class Carrito {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(name="id_carrito")
	private Long idCarrito;
	
	@OneToOne
	@JoinColumn(name="id_usuario")
	private Usuario id_usuario;

}
