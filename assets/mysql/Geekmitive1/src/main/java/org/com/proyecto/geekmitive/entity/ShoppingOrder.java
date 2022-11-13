package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "shopping_order")
@Entity
public class ShoppingOrder {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	      
	      @Column(name="id_shoppingOrder")
		  private Long id_shopingorder;
		 
		  @ManyToOne
		  @JoinColumn(name="id_usuario")
		  private Usuario id_usuario;
		  
		  
		  private Double montoTotal;


		public Long getId_shopingorder() {
			return id_shopingorder;
		}


		public void setId_shopingorder(Long id_shopingorder) {
			this.id_shopingorder = id_shopingorder;
		}


		public Usuario getId_usuario() {
			return id_usuario;
		}


		public void setId_usuario(Usuario id_usuario) {
			this.id_usuario = id_usuario;
		}


		public Double getMontoTotal() {
			return montoTotal;
		}


		public void setMontoTotal(Double montoTotal) {
			this.montoTotal = montoTotal;
		}
		  
		  

}
