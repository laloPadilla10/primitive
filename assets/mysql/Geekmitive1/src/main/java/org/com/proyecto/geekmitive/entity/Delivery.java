package org.com.proyecto.geekmitive.entity;

import javax.persistence.*;

@Table(name = "delivery")
@Entity
public class Delivery {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@ManyToOne
	@JoinColumn(name="id_shoppingOrder")
	private ShoppingOrder id_shopingorder;
	
	@ManyToOne
	@JoinColumn(name="id_producto")
	private Producto id_producto;
	
	private Integer cantidadProducto;
	
	private Double subtotalProducto;

	public ShoppingOrder getIdShoppingOrder() {
		return id_shopingorder;
	}

	public void setIdShoppingOrder(ShoppingOrder idShoppingOrder) {
		this.id_shopingorder = idShoppingOrder;
	}

	public Producto getIdProducto() {
		return id_producto;
	}

	public void setIdProducto(Producto idProducto) {
		this.id_producto = idProducto;
	}

	public Integer getCantidadProducto() {
		return cantidadProducto;
	}

	public void setCantidadProducto(Integer cantidadProducto) {
		this.cantidadProducto = cantidadProducto;
	}

	public Double getSubtotalProducto() {
		return subtotalProducto;
	}

	public void setSubtotalProducto(Double subtotalProducto) {
		this.subtotalProducto = subtotalProducto;
	}
	
	

}
